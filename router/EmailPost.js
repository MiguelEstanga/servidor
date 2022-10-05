const Email = require('express').Router()
const EmailModelo = require("../models/EmailModel")


Email.post('/Email' , async (req , res) =>{
    const {Email} = req.body

     try {
         const data  = new EmailModelo({Email})
         await data.save()
         res.json({mensage:'registro exitoso'})
     } catch (error) {
        res.send(error)
     }   
})

module.exports = Email