import mongoose from 'mongoose';

const testdataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }
}, {timestamps:true});

const Testdata = mongoose.model('Testdata', testdataSchema);

export default Testdata;