import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/album.Model.js";

const Addalbum = async (req, res) => {
    try {

        const name = req.body.name
        const desc = req.body.desc
        const bgColour = req.body.bgColour
        const image = req.file

        const uploadimage = await cloudinary.uploader.upload(image.path,{resource_type:"image"})
      
        const albumdata= {

            name,
            desc,
            bgColour,
            image:uploadimage.secure_url
        }

        const album = albumModel(albumdata)
        await album.save()

        res.json({success:true,message:"Created the album"});

    } catch (error) {
        res.json({success:false})
    }
};

const Listalbum = async (req, res) => {
    try {
        
const allAlbum = await albumModel.find({})
res.json({success:true,allAlbum})

    } catch (error) {
        res.json({success:false})
    }
};

const removelbum = async (req, res) => {
    try {
        

        await albumModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Delted"})
    } catch (error) {
        res.json({success:false})
    }
};

export { Addalbum, Listalbum, removelbum };
