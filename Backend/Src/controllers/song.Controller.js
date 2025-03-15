import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/song.Model.js";

const Addsong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audio = req.files.audio[0];
    const image = req.files.image[0];

    const audioUpload = await cloudinary.uploader.upload(audio.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;

    const songdata = {
      name,
      desc,
      album:album,
      image: imageUpload.secure_url,
      audio: audioUpload.secure_url,
      duration,
    };

    const song = new songModel(songdata);
    await song.save();

    res.json({ success: true, message: "Song Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

const Listsong = async (req, res) => {
  try {
    const allsongs = await songModel.find();
    res.json({ success: true, song: allsongs });
  } catch (error) {
    res.json({ success: false });
  }
};

const removesong = async (req, res) => {
  try {
    await songModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "SONG DELETED" });
  } catch (error) {
    res.json({ success: false });
  }
};

export { Addsong, Listsong, removesong };
