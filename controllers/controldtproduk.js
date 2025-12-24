import db from '../config/db.js';

// CREATE DATA PRODUK
 export const createProduct = (req, res) => {
    const { name, price } = req.body;

    db.query ('INSERT INTO products (name, price) VALUES (?, ?)',
        [name, price],
        (err, results) => {
        //jika eror
            if (err) return res.status(500).json({ message: err});

        //jika berhasil
            res.json({ message: 'Data berhasil disimpan'});
        });
 };


// ALL DATA PRODUK
export const getproduct = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
    //jika eror
        if (err) return res.status(500).json({ message: err});

    
    //jika berhasil
        res.json(results);
    });
};

//SHOW PRODUK BYID
export const showproduct = (req, res) => {
  const { id } = req.params;

  db.query(
    'SELECT * FROM products WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: 'Produk tidak ditemukan' });
      }

      res.json(results[0]);
    }
  );
};


// UPDATE PRODUK
export const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

db.query('UPDATE products SET name=?, price=? WHERE id=?',
    [name, price, id],
    (err, results) => {
    //jika error
        if (err) return res.status(500).json({ message: err});
        
    //jika berhasiil
        res.json({ message: "Produk Berhasil diUpdate"});
    });
};


// DELETE PRODUK

export const deleteProduct = (req, res) => {
    const { id } = req.params;

db.query("DELETE FROM products WHERE id=?", [id], (err, results) => {
    //jika error
    if (err) return res.status(500).json({ message: err });

    //jika berhasil
    res.json({ message: "Produk berhasil dihapus" });
    });
};