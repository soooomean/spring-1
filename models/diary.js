module.exports = (sequelize, Sequelize) => {
    /*
    diary_id: 일기 ID
    contents: 작성글
    createdAt: 작성날짜(timestamps가 자동으로 생성)
    weather: 날씨
    photo: 사진
    user_id: 회원 ID
    */
    const Diary = sequelize.define("diary", {
        diary_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        contents: {
            type: Sequelize.STRING,
            allowNull: false
        },
        weather: {
            type: Sequelize.STRING,
            allowNull: true
        },
        photo: {                    // 이미지 저장을 위한 DATATYPE 알아봐야 함
            type: Sequelize.STRING.BINARY,  
            allowNull: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },

    {timestamps: true}
    
    );
    return Diary;
}