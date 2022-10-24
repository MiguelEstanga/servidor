const mongoose = require("mongoose")
const {Schema , model , Types} = mongoose

const EmailModelo = new Schema({
  
    Email:{type:String},
    fecha:{type:String}
  
  
})
module.exports = model('Email' , EmailModelo)
