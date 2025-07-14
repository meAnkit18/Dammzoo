import mongoose from "mongoose";

const characterSchemaa = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    imgl:{
         type:String,
        require:true,
    },
    bio:{
        type:String,
        require:true,
    },
    nature:{
        type:String,
        require:true,
    }
})
const Scharacter = mongoose.model('Scharacter',characterSchemaa);
export default Scharacter;