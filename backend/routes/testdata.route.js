import express from 'express';
import { addNewData, getData, updateData } from '../controllers/testdata.controller.js';
const testdataRouter = express.Router();

testdataRouter.post('/add-newdata',addNewData);
testdataRouter.patch('/update-data/:id', updateData);
testdataRouter.get('/get-data', getData);

export default testdataRouter;