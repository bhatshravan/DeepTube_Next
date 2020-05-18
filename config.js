const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	MYSQL_HOST: "localhost",
	MYSQL_user: "root",
	MYSQL_password: process.env.mysqlPassword,
	MYSQL_database: "deeptube",
};
