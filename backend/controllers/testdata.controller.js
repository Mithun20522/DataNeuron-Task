import Testdata from "../models/testdata.model.js";

export const addNewData = async(req, res) => {
    try {
        const {name, age} = req.body;
        if(!name || !age) return res.status(404).json({message:'Both fields are mandatory'});
        const data = await Testdata.findOne({name});
        if(data){
            return res.status(409).json({message:'This name already exist'});
        }

        const newData = new Testdata({name, age});
        await newData.save();
        return res.status(201).json({message:'New data added', newData});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const updateData = async(req, res) => {
    try {

        const {id} = req.params;
        const updatedData = await Testdata.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedData) return res.status(404).json({message:'Data not found'});
        return res.status(200).json({message:'Data updated', updatedData});

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const getData = async(req, res) => {
    try {
        const data = await Testdata.find();
        if(data.length === 0){
            return res.status(404).json({message:'No data yet'});
        }
        return res.status(200).json(data[data.length - 1]);
    } catch (error) {
        return res.status(500).json({message:error.message}); 
    }
}

export const currentData = async(req, res) => {
    try {
        const {content} = req.params;
        const data = await Testdata.findOne({content});
        if(!data){
            return res.status(404).json({message:'No data found'});
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
