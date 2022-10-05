const Comentario = require('express').Router()
const ComentarioModelo  = require("../models/ComentarioModel")

Comentario.post("/Comentario" , async (req , res) => {
    const {Comentario , Nombre , Email} = req.body;
    try {
        const data = new ComentarioModelo({
            Comentario,
            Nombre,
            Email
        })

        await data.save();
        res.json({ mensage : 'comentario cargado con exito'})
    } catch (error) {
        res.json({mensage : error})
    }
})

module.exports = Comentario