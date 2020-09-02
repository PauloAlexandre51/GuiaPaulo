const Sequelize = require("sequelize")

const connection = new Sequelize('guiapaulo','root', '19970603', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
}) 

module.exports = connection