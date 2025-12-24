import db from '../config/db.js';

// CREATE DATA PRODUK
 export const createkategori = (req, res) => {
    const { name } = req.body;

    db.query ('INSERT INTO categories (name) VALUES (?)',
        [name],
        (err, results) => {
            if (err) return res.status(500).json({ message: err});

            res.json({ message : "Kategori Berhasil di tambahkan!"});
        });
 };


// ALL DATA Kategori
export const getkategori = (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) return res.status(500).json({ message: err});

        res.json(results);
    });
};


//SHOW KATEGORI BYID
export const showkategori = (req, res) => {
  const { id } = req.params;

  db.query(
    'SELECT * FROM categories WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: 'Kategori tidak ditemukan' });
      }

      res.json(results[0]);
    }
  );
};



// UPDATE Kategori
export const updatekategori = (req, res) => {
    const { id } = req.params;
    const { name} = req.body;

db.query('UPDATE categories SET name=? WHERE id=?',
    [name, id],
    (err, results) => {
        if (err) return res.status(500).json({ message: err});
        
        res.json({ message: "Kategori Berhasil diUpdate"});
    });
};


// DELETE PRODUK

export const deletekategori = (req, res) => {
    const { id } = req.params;

db.query("DELETE FROM categories WHERE id=?", [id], (err, results) => {
    
    if (err) return res.status(500).json({ message: err });

    res.json({ message: "Kategori berhasil dihapus" });
    });
};