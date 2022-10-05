const mongoose = require("mongoose")
const {Schema , model , Types} = mongoose

const HabilidadesModel = new Schema({
    Imagen:{type:String},
    nombre:{type:String},
    ruta:{type:String},
    color:{type:String}
  
})
module.exports = model('Habilidades' , HabilidadesModel)