let mysql = require("mysql");
let config = require("../../config");

let con = mysql.createConnection({
	host: config.MYSQL_HOST,
	user: config.MYSQL_user,
	password: config.MYSQL_password,
	database: config.MYSQL_database,
});

con.connect((err) => {
	if (err) throw err;
});

export default (req, res) => {
	res.status(200);
	let query = "SELECT * FROM deeps ORDER BY RAND() LIMIT 10";
	con.query(query, (err, result) => {
		if (err) console.log(err);
		res.send(result);
	});
};
