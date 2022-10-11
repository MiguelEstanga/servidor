const Comentario = require('express').Router()
const ComentarioModelo  = require("../models/ComentarioModel")
const uploadsImagenes = require("../../util/cloudinary")
Comentario.post("/Comentario" , async (req , res) => {
    const {Comentario , Nombre , Email} = req.body;
    try {
        const { tempFilePath } = req.files.file
        //achivando imagenes en lineas
        const resultado = await uploadsImagenes(tempFilePath , "Avatars") 
        const data = new ComentarioModelo({
            Comentario,
            Nombre,
            Email,
            Avatar:resultado.url
        })

        await data.save();
        res.json({ mensage : 'comentario cargado con exito'})
    } catch (error) {
        res.json({mensage : error})
    }
})

module.exports = Comentario
