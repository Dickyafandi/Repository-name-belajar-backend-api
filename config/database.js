const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "dicky_portfolio"
});

db.connect((error) => {
    if (error) {
        console.error("Koneksi MySQL gagal:", error);
        return;
    }

    console.log("MySQL berhasil terhubung!");
});

module.exports = db;