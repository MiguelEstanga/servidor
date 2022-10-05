const getportafolio = require('express').Router()
const EmailModel = require('../models/EmailModel')
const PortafolioModel =require('../models/portafoliomodels')
const ComentarioModel =  require("../models/ComentarioModel")
const HabilidadesModel = require("../models/HabilidadesModel")

getportafolio.get("/portafolio" , async (req , res) =>{
    const get = await PortafolioModel.find({})
    res.json(get)
})

getportafolio.get("/Email" , async (req ,res) =>{
    const get = await EmailModel.find({})
    res.json(get)
})

getportafolio.get("/Comentarios" , async (req , res ) => {
    const get = await ComentarioModel.find({})
    res.json(get)
})

getportafolio.get('/Habilidades' , async (req , res) => {
    const get = await HabilidadesModel.find({})
    res.json(get)
})


module.exports = getportafolio