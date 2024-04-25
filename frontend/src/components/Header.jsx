import { useContext, useState } from "react"
import {MdClose} from 'react-icons/md';
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { addDataFailure, addDataStart, addDataSuccess, updateDataStart, updateDataSuccess } from "../redux/testdataSlice";

const Header = () => {
 const [isAddClicked, setIsAddClicked] = useState(false)
 const [isUpdateClicked, setIsUpdateClicked] = useState(false)
 const [addFormData, setAddFormData] = useState({});
 const [updateFormData, setUpdateFormData] = useState({});
 const dispatch = useDispatch();
 const {currentData, apiHitCount}  = useSelector((state) => state.testdata);

 const handleAddNewData = async(e) => {
    e.preventDefault();
    try {
        dispatch(addDataStart());
        const res = await fetch('https://dataneuron-task-backend.onrender.com/api/testdata/add-newdata',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(addFormData)
        });
        const data = await res.json();
        if(res.ok){
          
          toast.success(data.message);
          dispatch(addDataSuccess(data.newData));
          setIsAddClicked(!isAddClicked);
        }
        else{
            console.log(data.message);
            toast.error(data.message);
            dispatch(addDataFailure(data.message));
            return;
        }
    } catch (error) {
        console.log(error);
        dispatch(addDataFailure(error.message));
    }
 }

 const handleUpdateData = async(e) => {
    e.preventDefault();
    try {
        dispatch(updateDataStart());
        const res = await fetch(`https://dataneuron-task-backend.onrender.com/api/testdata/update-data/${currentData ? currentData._id : ''}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updateFormData)
        });
        const data = await res.json();
        if(res.ok){
          toast.success(data.message);
          dispatch(updateDataSuccess(data.updatedData))
          setIsUpdateClicked(!isUpdateClicked);
        }
        else{
            console.log(data.message);
            toast.error(data.message);
            return;
        }
    } catch (error) {
        console.log(error);
    }
 }

 const handleAddChange = (e) => {
    setAddFormData({
        ...addFormData,
        [e.target.id]:e.target.value
    })
 }

 const handleUpdateChange = (e) => {
    setUpdateFormData({
        ...updateFormData,
        [e.target.id]:e.target.value
    })
 }
 
  return (
    <div className="flex items-center justify-center gap-5">
        <div className="flex flex-wrap gap-2 text-sm text-white font-semibold justify-center p-5 ">
        <button onClick={() => setIsAddClicked(!isAddClicked)} className="bg-green-500 rounded-md hover:bg-green-700 px-3 py-1">Add</button>
        {
            isAddClicked && (
                <form className="bg-slate-500 absolute flex flex-col gap-2 p-5 z-10" onSubmit={handleAddNewData}>
                    <MdClose onClick={() => setIsAddClicked(!isAddClicked)} className="text-lg cursor-pointer rounded-full hover:bg-slate-100 w-6 h-6 hover:text-black font-bold"/>
                    <input id="name" onChange={(e) => handleAddChange(e)} type="text" placeholder="Enter Name...." className="p-2 text-black font-semibold outline-none rounded-md bg-slate-200" />
                    <input id="age" onChange={(e) => handleAddChange(e)} type="number" placeholder="Enter Age...." className="p-2 text-black font-semibold outline-none rounded-md bg-slate-200" />
                    <button type='submit' className="bg-green-700 hover:bg-green-900 text-white  p-2 rounded-lg">Add data</button>
                </form>
            )
        }
        <button onClick={() => setIsUpdateClicked(!isUpdateClicked)} className="bg-yellow-500 rounded-md hover:bg-yellow-700 px-2 py-1">Update</button>
        {
            isUpdateClicked && (
                <form className="bg-slate-500 absolute flex flex-col gap-2 p-5 z-10" onSubmit={handleUpdateData}>
                    <MdClose onClick={() => setIsUpdateClicked(!isUpdateClicked)} className="text-lg cursor-pointer rounded-full hover:bg-slate-100 w-6 h-6 hover:text-black font-bold"/>
                    <input id="name" onChange={(e) => handleUpdateChange(e)} type="text" placeholder="Enter Name...." className="p-2 text-black font-semibold outline-none rounded-md bg-slate-200" />
                    <input id="age" onChange={(e) => handleUpdateChange(e)} type="number" placeholder="Enter Age...." className="p-2 text-black font-semibold outline-none rounded-md bg-slate-200" />
                    <button type="submit" className="bg-yellow-700 hover:bg-yellow-900 text-white  p-2 rounded-lg">Update data</button>
                </form>
            )
        }
    </div>
        <span>Count: {apiHitCount ? apiHitCount : 0}</span>
    </div>
  )
}

export default Header