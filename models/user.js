module.exports = (sequelize, Sequelize) => {
    /*
    user_id: 회원 ID
    email: 이메일
    password: 비밀번호
    */
    const User = sequelize.define("user", {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    {timestamps: false}
    );

    // 연관관계 설정
    User.associate = function(models) {
        User.hasMany(models.post, {
            foreignKey: 'user_id',
            as: 'user_id'
        });
    };

    return User;
}
