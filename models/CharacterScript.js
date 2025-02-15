const mongoose= require('mongoose')

const characterSchema = new mongoose.Schema({
    title: String,
    character: String,
    dialogue: String
});

const Character = mongoose.model("Character", characterSchema);


module.exports=Character