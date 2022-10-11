const Habilidades = require('express').Router()
const HabilidadesModel = require('../models/HabilidadesModel')
const uploadsImagenes = require("../../util/cloudinary")
Habilidades.post("/Habilidades" , async (req , res) =>{
    const {nombre , color} = req.body
   
    try {
        const { tempFilePath } = req.files.file
        const resultado = await uploadsImagenes(tempFilePath , "Habilidades") 
        console.log(resultado)
        const data  = new HabilidadesModel({
            nombre,
            Imagen:resultado.url,
            ruta:resultado.url,
            color
        })
        data.save()
        res.json({mensage: 'cargado con exito'})
    } catch (error) {
        res.json({mensage: error})
    }
})

module.exports = Habilidades