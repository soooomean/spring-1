module.exports = (sequelize, Sequelize) => {
    /*
    medicine_id: 약 ID
    name: 약 이름
    prescription_date: 처방날짜
    prescription_amount: 처방량
    */
    const Medicine = sequelize.define("medicine", {
        medicine_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        medicine_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prescription_date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        prescription_amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    },

    {timestamps: false},
    
    );
    return Medicine;
}