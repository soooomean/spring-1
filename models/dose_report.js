module.exports = (sequelize, Sequelize) => {
    /*
    dose_report_id: 복용내역 ID
    dose_date: 복용 날짜
    dose_time: 복용 시간대
    medicine_id: 약 ID
    */
    const DoseReport = sequelize.define("dose_report", {
        dose_report_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        dose_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        dose_time: {
            type: Sequelize.TIME,
            allowNull: false
        },
        medicine_id: {
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    },

    {timestamps: false}

    );
    return DoseReport;
}