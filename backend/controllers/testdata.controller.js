import Testdata from "../models/testdata.model.js";

export const addNewData = async(req, res) => {
    try {
        const {content} = req.body;
        if(!content) return res.status(404).json({message:'Fill the required field'});
        const newData = new Testdata({content});
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
