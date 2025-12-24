import db from "../config/db.js";


// 1. MENAMPILKAN DATA DARI TABLE
// sql ? SELECT * FROM users
export const getUsers = (req, res) => {
    db.query('SELECT * FROM users',(err, results) => {
        //jika ada eror
        if (err) res.status(500).json({message: err});


        //jika berhasil
        res.json(results);
    });
}


// 2. MENYIMPAN DATA
//sql ?INSERT INTO users (name, email, password) values (?,?,?)
export const insertUser = (req, res) => {
    const {name, email, password} = req.body;

    db.query(
        "INSERT INTO users (name, email, password) VALUES (?,?,?)",
        [name, email, password],
        (err, results) => {
            //jika ada error
            if (err) res.status(500).json({message: err});


            // jika berhasil
            res.json({ message: 'Data berhasil disimpan'});
        }

    );
};


// 3. MENAMPILKAN DATA BERDASARAKAN id
//sql ? SELECT * FROM users WHERE id=?
export const showUsers = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM users WHERE id=?", { id }, (err, results) => {
        //jika ada error
            if (err) res.status(500).json({message: err});

        //jika tidak ditemukan
        if  (results.length === 0) {
            return res.status(400).json({message: 'user tidak ditemukan'})
        }


        // jika berhasil
            res.json( results[0]);

    });
};





// 4. UPDTAE DATA BERDASARAN id
//sql ? UPDATE usser SET name=? email=? WHERE id=?
export const updateUser = (req, res) => {
    const { id } = req.params;
    const {name, email } = req.body;

    db.query('UPDATE users SET name=?, email=?, WHERE id=? ',
        [name, email, id],
        //jika error
        (err, results) => {
            if (err) return res.status(500).json({ message: err});

        //jika berhasil 
        res.json({ message: 'User Berhasil DiUpdate'});
        }
    );
};



// 5. DELETE DATA BERDASARKAN ID
//mysql
export const deleteUser = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {
    //jika ada error
    if (err) return res.status(500).json({ message: err });

    //jika berhasil
    res.json({ message: "User berhasil dihapus" });
    });
};