const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name :{
    type : String,
    required : true,
},
    age : Number,
    favoriteFood:{
     type: [String],
    
    }
})

module.exports = mongoose.model('user',userSchema)
