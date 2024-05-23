module.exports = (sequelize, Sequelize) => {
    /*
    test_id: 테스트 ID
    result: 선택지 결과
    test_date: 테스트 일자
    total_score: 총점
    user_id: 회원 ID
    */
    const Test = sequelize.define("test", {
        test_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        result: {
            type: Sequelize.STRING,
            allowNull: false
        },
        test_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        total_score: {
            type: Sequelize.INTEGER,
            allowNull: false,
            // check constraint 추가해주어야함
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },

    {timestamps: false},

    );
    return Test;
}