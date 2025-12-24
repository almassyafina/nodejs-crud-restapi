import exspress from "express";
import userroutes from './routes/userroutes.js';
import produkroutes from './routes/produkroutes.js';
import kategoriroutes from './routes/kategoriroutes.js';
import dotenv from "dotenv";



dotenv.config();

const app = exspress();
app.use(exspress.json());

app.use("/Users",userroutes);
app.use('/Products', produkroutes);
app.use('/categories', kategoriroutes);


app.listen(process.env.PORT, () => {
    console.log('Server Berjalan di http://localhost:${process.env.PORT}');
});