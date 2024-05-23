'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.post = require("./post.js")(sequelize, Sequelize);
db.comment = require("./comment.js")(sequelize, Sequelize);
db.test = require("./test.js")(sequelize, Sequelize);
db.medicine = require("./medicine.js")(sequelize, Sequelize);
db.doseReport = require("./dose_report.js")(sequelize, Sequelize);
db.sleepReport = require("./sleep_report.js")(sequelize, Sequelize);
db.exerciseReport = require("./exercise_report.js")(sequelize, Sequelize);
db.diary = require("./diary.js")(sequelize, Sequelize);



// User.hasMany(Post);
// Post.belongsTo(User);


module.exports = db;
