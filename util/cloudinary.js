const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: 'dmrkgkvpo', 
    api_key: '365369612323874', 
    api_secret: 'o4oe3tuecORJmff9rBr1uOGzAyk',
    secure: true
  });

async function uploadsImagenes(ruta , file){
    return  await cloudinary.uploader.upload(ruta,{file})
}

module.exports = uploadsImagenes