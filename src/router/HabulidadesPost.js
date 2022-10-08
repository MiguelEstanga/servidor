const Habilidades = require('express').Router()
const HabilidadesModel = require('../models/HabilidadesModel')

Habilidades.post("/Habilidades" , async (req , res) =>{
    const {nombre , color} = req.body
   
    try {
        const data  = new HabilidadesModel({
            nombre,
            Imagen:req.file.originalname,
            ruta:'/imagen/' + req.file.filename,
            color
        })
        data.save()
        res.json({mensage: 'cargado con exito'})
    } catch (error) {
        res.json({mensage: error})
    }
})

module.exports = Habilidades