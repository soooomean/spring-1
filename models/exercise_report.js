module.exports = (sequelize, Sequelize) => {
    /*
    exercise_report_id: 운동 내역 ID
    exercise_date: 운동 날짜
    start_exercise_time: 운동 시작시간
    end_exercise_time: 운동 종료시간
    exercise_type: 운동 종류
    exercise_rate: 오늘 운동 평가
    user_id: 회원 ID
    */
    const ExerciseReport = sequelize.define("exercise_report", {
        exercise_report_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        exercise_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        start_exercise_time: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        end_exercise_time: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        exercise_type: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        exercise_rate: {
            type: Sequelize.INTEGER,
            allowNull: true
            // check constraint 추가해주어야함
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },

    {timestamps: false}
    
    );
    return ExerciseReport;
}