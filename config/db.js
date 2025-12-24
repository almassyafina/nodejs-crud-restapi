import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();

//perintah koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});


//JALANKAN KONEKSI DATABASE
db.connect((err) => {
    //jika eror
    if (err) {
        console.error("Erorr koneksi Database", err);
        return;
    }

    //jika berhasil
    console.log ('MySQL Berhasil connect');
});

export default db;