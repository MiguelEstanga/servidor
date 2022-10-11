const express = require('express')
const app = express()
const cors  = require('cors')
const Habilidades = require("./router/HabulidadesPost")
const getportafolio = require("./router/Getportafolio")
const fileUpload = require("express-fileupload")
const postImagen = require('./router/ImagenesPost')

const Email = require('./router/EmailPost')
const Comentario = require("./router/ComentarioPost")
require('../util/conexion')




//midelware
app.use(express.json())
app.use(cors('dev'))
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './apload'
}));
//ruatas
app.use(Habilidades)
app.use(getportafolio)
app.use(postImagen)
app.use(Email)
app.use(Comentario)


//static 
//app.use(express.static(path.join(__dirname , 'public')))


const port = process.env.PORT || 4000
app.listen( port ,()=>{
    console.log('app lista en el puerto ' , port )
} )