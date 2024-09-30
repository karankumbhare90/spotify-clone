import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import songRouter from './src/routes/songRouter.js'

import connectDB from './src/config/config.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRouter.js';

// app config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();


// Middleware
app.use(express.json());
app.use(cors())

// Initialize routers
app.use('/api/song', songRouter);
app.use('/api/album', albumRouter);

app.get('/', (req, res) => {
    res.send({ msg: "API WORKING" })
})

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
})