const mongose = require("mongoose")

mongose.connect(
    
"mongodb+srv://Root:lamuerte@cluster0.5qrh9.mongodb.net/React?retryWrites=true&w=majority",

).then(res => console.log('todo bien con mongose '))
    .catch(err => console.log('todo mal con mongose'))
