### Nama : ALMAS JAUFILAEL SYAROFINA

### NIM  : 24090092

### Kelas: 3C

# CARA MENJALANKAN PROJECT CRUD API
1. Buka Aplikasi XAMPP jalankan Apache dan MySQL
2. Akses php MyAdmin, buat database baru lalu konfigurasikan pada VS code melalui file env
3. Buka terminal pada VS Code untuk menjalankan project, lalu masukan perintah berikut : `npm run dev`
4. Buka Postman 


# Categories

## Create Kategori
1. Pilih metode POST

2. Masukkan URL `http://localhost:3000/categories`

3. Klik body, lalu pilih raw dan masukkan data JSON
     `{
     "name" : "Face Care"
     }`
4.  klik send
<img src="image/kategori/createkategori.png" alt="Lihat Data Kategori" width="500">


## Read Kategori
 1. Pilih metode GET
 
 2. Masukkan URL
   `http://localhost:3000/categories`

 3. klik send, data akan di tampilkan
<img src="image/kategori/getkategori.png" alt="Lihat Data Kategori" width="500">

## Update Kategori
1. Pilih metode PUT

2. Masukkan URL `http://localhost:3000/categories/1`

3. Klik body, lalu pilih raw dan masukkan data JSON
     `{
     "name" : "Peralatan Mandi"
     }`
  
4. Klik send
<img src="image/kategori/updatekategori.png" alt="Lihat Data Kategori" width="500">

## Delete Kategori
1. Pilih metode DELETE

2. Masukan URL `http://localhost:3000/categories/4`

3. Klik body, lalu pilih raw dan masukkan data JSON
    `{
     "id": 4,
     "name" : "Peralatan Mandi"
     }`

4. Klik send
<img src="image/kategori/deletekategori.png" alt="Lihat Data Kategori" width="500">




# Products

## Create Produk

1. Pilih metode POST

2. Masukkan URL `http://localhost:3000/products`

3. Klik body, lalu pilih raw dan masukkan data JSON
   `{
   "name": "Scrub",
   "price": 15000
    }`
4.  klik send

<img src="image/produk/createproduk.png" alt="Lihat Data Kategori" width="500">


## Read Produk

1. Pilih metode GET
 
 2. Masukkan URL
   `http://localhost:3000/products`

 3. klik send, data akan di tampilkan

<img src="image/produk/getproduk.png" alt="Lihat Data Kategori" width="500">

## Update Produk

1. Pilih metode PUT

2. Masukkan URL `http://localhost:3000/products/1`

3. Klik body, lalu pilih raw dan masukkan data JSON
   `{
   "name" : "Sabun Mandi Cair",
   "price": 15000
   }`
  
4. Klik send

<img src="image/produk/updateproduk.png" alt="Lihat Data Kategori" width="500">

## Delete Produk

1. Pilih metode DELETE

2. Masukkan URL `http://localhost:3000/products/1`

3. Klik body, lalu pilih raw dan masukkan data JSON
   `{
   "name" : "Sabun Mandi Cair",
   "price": 15000
   }`
  
4. Klik send


<img src="image/produk/deleteproduk.png" alt="Lihat Data Kategori" width="500">
