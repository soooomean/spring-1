module.exports = (sequelize, Sequelize) => {
    /*
    sleep_report_id: 수면 내역 ID
    sleep_date: 수면 날짜
    sleep_rate: 오늘 수면 평가
    sleep_duration: 수면 시간
    start_sleep_time: 취침 시간
    end_sleep_time: 기상 시간
    user_id: 회원 ID
    */
    const SleepReport = sequelize.define("sleep_report", {
        sleep_report_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        sleep_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        sleep_rate: {
            type: Sequelize.INTEGER,
            allowNull: true
            // check constraint 추가해주어야함
        },
        sleep_duration: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        start_sleep_time: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        end_sleep_time: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },

    {timestamps: false}
    
    );
    return SleepReport;
}