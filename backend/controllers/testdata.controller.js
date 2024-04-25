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