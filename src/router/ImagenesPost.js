const postImagen = require('express').Router()
const PortafolioModel =require('../models/portafoliomodels')

postImagen.post('/Imagenes' , async (req , res) =>{
    const {nombre , type,Tecnologias ,descripcion} = req.body
   
   // const data = fs.readFileSync(path.join(__dirname , '../public/imagen/' + req.file.fieldname ))
    try {
       
        const Data = new PortafolioModel({
            Imagen:req.file.originalname,
            nombre,
            descripcion,
            type,
            ruta: '/imagen/' + req.file.filename
        })
        const dataTecno = Tecnologias.split(',')
        dataTecno.map(f => {
            Data.Tecnologias.push(f)
        })
        console.log(dataTecno)
        await Data.save()
        res.send(201)
    } catch (error) {
        res.send(error)
        console.log('error al subir la imagen ')
    }

    res.send('cargado exitosamente')
})

module.exports = postImagen 
