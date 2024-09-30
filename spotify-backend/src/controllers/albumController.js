import { v2 as cloudinary } from 'cloudinary'
import albumModel from '../models/albumModel.js';

const createAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })

        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData);

        await album.save();

        return res.status(200).json({ success: true, message: "Album Created" });

    } catch (error) {
        return res.status(501).json({ success: false, message: "Internal Server Error" });
    }
}

const listAlbum = async (req, res) => {
    try {
        const allAlbum = await albumModel.find();
        return res.status(200).json({ success: true, albums: allAlbum });

    } catch (error) {
        return res.status(501).json({ success: false, message: "Internal Server Error" });
    }
}

const removeAlbum = async (req, res) => {
    try {
        const albumId = req.body.id;

        const result = await albumModel.findByIdAndDelete(albumId);

        if (!result) {
            return res.status(400).json({ success: false, message: "Error while removing album" });
        }
        return res.status(200).json({ success: true, message: "Album Removed" });

    } catch (error) {
        return res.status(501).json({ success: false, message: "Internal Server Error" });
    }
}

export {
    createAlbum, listAlbum, removeAlbum
}