const mongoose = require("mongoose")
const {Schema , model , Types} = mongoose

const ComentarioModelo = new Schema({
    Email:{type:String},
    Nombre:{type:String},
    Comentario:{type:String}
  
})
module.exports = model('Comentario' , ComentarioModelo)