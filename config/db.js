const mysql = require('mysql2');

// Membuat koneksi database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",       
    database: "genexmart"  
});

// Cek koneksi
db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Database connected!");
    }
});

// Ekspor agar bisa digunakan di file lain
module.exports = db;
