db = require("./index.js");

module.exports = (sequelize, Sequelize) => {
    /*
    post_id: 게시글 ID
    created_At: 작성날짜
    title: 제목
    contents: 내용
    user_id: 회원 ID
    */
    const Post = sequelize.define("post", {
        post_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contents: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },

    {
        /*
        게시글 작성 시간을 createdAt 필드로 생성
        */
        timestamps: true
    },

    );

    // 회원과의 연관관계 설정    
    Post.associate = function(db) {
        Post.belongsTo(db.user, {
            foreignKey: 'user_id',
            as: 'user_id'
        });
    };
    
    return Post;
}