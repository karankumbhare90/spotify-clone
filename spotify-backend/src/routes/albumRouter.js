import express from 'express';


import upload from '../middleware/multer.js';
import { createAlbum, listAlbum, removeAlbum } from '../controllers/albumController.js';

const albumRouter = express.Router();

albumRouter.post('/create', upload.single("image"), createAlbum);
albumRouter.get('/list', listAlbum);
albumRouter.post('/remove', removeAlbum);

export default albumRouter;