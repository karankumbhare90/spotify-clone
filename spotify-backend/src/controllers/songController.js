import { v2 as cloudinary } from 'cloudinary'
import songModel from '../models/songModel.js';

const addSong = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

        const minutes = Math.floor(audioUpload.duration / 60);
        const seconds = Math.floor(audioUpload.duration % 60);  // Use modulo to get seconds
        const duration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Add leading zero for single-digit seconds

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        const song = songModel(songData);
        await song.save();

        return res.status(200).json({ success: true, message: "Song Added" });
    } catch (error) {
        console.log(error);
        return res.status(501).json({ success: false, message: "Internal Server Error" });
    }
}

const listSong = async (req, res) => {
    try {
        const allSongs = await songModel.find();
        return res.status(200).json({ success: true, songs: allSongs });

    } catch (error) {
        return res.status(501).json({ success: false, message: "Internal Server Error" });
    }
}

const removeSong = async (req, res) => {
    try {
        const songId = req.body.id;

        const result = await songModel.findByIdAndDelete(songId);

        if (!result) {
            return res.status(400).json({ success: false, message: "Error while removing song" });
        }
        return res.status(200).json({ success: true, message: "Song Removed" });

    } catch (error) {
        return res.status(501).json({ success: false, message: "Internal Server Error" });
    }
}

export {
    addSong, listSong, removeSong
}