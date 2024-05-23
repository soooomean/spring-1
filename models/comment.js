module.exports = (sequelize, Sequelize) => {
    /*
    comment_id: 댓글 ID
    createdAt: 작성 날짜
    contents: 내용
    post_id: 게시글 ID
    user_id: 회원 ID
    parent_id: 부모댓글 ID
    */
    const Comment = sequelize.define("comment", {
        comment_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        contents: {
            type: Sequelize.STRING,
            allowNull: false
        },
        post_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        parent_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },

    {
        /*
        '작성 날짜'를 createdAt 필드로 생성
        */
        timestamps: true
    });
    return Comment;
}