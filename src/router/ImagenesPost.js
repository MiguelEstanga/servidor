const postImagen = require('express').Router()
const PortafolioModel =require('../models/portafoliomodels')
const uploadsImagenes = require("../../util/cloudinary")
postImagen.post('/Portafolio' , async (req , res) =>{
    const {nombre , type,Tecnologias ,descripcion} = req.body
   
    try {
        const { tempFilePath } = req.files.file
        //achivando imagenes en lineas
        const resultado = await uploadsImagenes(tempFilePath , "Portafolio") 
       
        const Data = new PortafolioModel({
            Imagen:resultado.url,
            nombre,
            descripcion,
            type,
            ruta: resultado.url,
            fecha:Date()
        })
        //array con las tecnologias
        const dataTecno = Tecnologias.split(',')
        dataTecno.map(f => {
            Data.Tecnologias.push(f)
        })
      
         Data.save()
         res.send('cargado exitosamente')
        res.json({mensage:"listo"})
    } catch (error) {
        res.send(error)
        console.log('error al subir la imagen ')
    }

   
})

module.exports = postImagen 
