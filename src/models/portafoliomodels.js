const mongoose = require("mongoose")
const {Schema , model , Types} = mongoose

const PortafolioModel = new Schema({
    Imagen:{type:String},
    type:{type:String},
    nombre:{type:String},
    descripcion:{type:String},
    Tecnologias:{type:[]},
    ruta:{type:String},
    fecha:{type:String},
    hora:{type:String}
  
})
module.exports = model('portafolios' , PortafolioModel)
