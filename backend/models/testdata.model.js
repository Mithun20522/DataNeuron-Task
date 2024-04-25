import mongoose from 'mongoose';

const testdataSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        trim:true
    }
}, {timestamps:true});

const Testdata = mongoose.model('Testdata', testdataSchema);

export default Testdata;