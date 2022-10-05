const express = require('express')
const app = express()
const cors  = require('cors')
const Habilidades = require("./router/HabulidadesPost")
const getportafolio = require("./router/Getportafolio")
const multer = require('multer')
const postImagen = require('./router/ImagenesPost')
const path = require('path')
const Email = require('./router/EmailPost')
const Comentario = require("./router/ComentarioPost")
require('./conexion')

//puerto
app.set('PORT' , process.env.PORT || 4000)
//multer configuracion
const storage = multer.diskStorage({
    destination:path.join( __dirname , '/public/imagen'),
    filename:(req , file , cb) =>{
        const extencion = file.originalname.split('.').pop()
        cb(null , `${Date.now()}.${extencion}`)
    }
})
//midelware
app.use(express.json())
app.use(cors('dev'))
app.use(multer({storage}).single('file'))


//ruatas
app.use(Habilidades)
app.use(getportafolio)
app.use(postImagen)
app.use(Email)
app.use(Comentario)


//static 
app.use(express.static(path.join(__dirname , 'public')))


app.listen( app.get("PORT"),()=>{
    console.log('app lista')
} )