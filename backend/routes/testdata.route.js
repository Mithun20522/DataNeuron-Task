import express from 'express';
import { addNewData, updateData } from '../controllers/testdata.controller.js';
const testdataRouter = express.Router();

testdataRouter.post('/add-newdata',addNewData);
testdataRouter.patch('/update-data/:id', updateData);

export default testdataRouter;