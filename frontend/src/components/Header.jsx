import { useContext, useState } from "react"
import {MdClose} from 'react-icons/md';
import TestdataContext from "../context/testdata/testdataContext";
import toast from "react-hot-toast";

const Header = () => {
 const [isAddClicked, setIsAddClicked] = useState(false)
 const [isUpdateClicked, setIsUpdateClicked] = useState(false)
 const [isCountClicked, setIsCountClicked] = useState(false)
 const [addFormData, setAddFormData] = useState({});
 const {setTestData} = useContext(TestdataContext);
 const [updateFormData, setUpdateFormData] = useState({
    content:''
 });

 const handleAddNewData = async(e) => {
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:8080/api/testdata/add-newdata',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(addFormData)
        });
        const data = await res.json();
        if(res.ok){
          setTestData(data.newData);
          toast.success(data.message);
          setIsAddClicked(!isAddClicked);
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
 
  return (
    <div className="flex items-center justify-center gap-5">
        <div className="flex flex-wrap gap-2 text-sm text-white font-semibold justify-center p-5 ">
        <button onClick={() => setIsAddClicked(!isAddClicked)} className="bg-green-500 rounded-md hover:bg-green-700 px-3 py-1">Add</button>
        {
            isAddClicked && (
                <form className="bg-slate-500 absolute flex flex-col gap-2 p-5 z-10" onSubmit={handleAddNewData}>
                    <MdClose onClick={() => setIsAddClicked(!isAddClicked)} className="text-lg cursor-pointer rounded-full hover:bg-slate-100 w-6 h-6 hover:text-black font-bold"/>
                    <input id="content" onChange={(e) => handleAddChange(e)} type="text" placeholder="Type anything...." className="p-2 rounded-md bg-slate-200" />
                    <button type='submit' className="bg-green-700 hover:bg-green-900 text-white  p-2 rounded-lg">Add data</button>
                </form>
            )
        }
        <button onClick={() => setIsUpdateClicked(!isUpdateClicked)} className="bg-yellow-500 rounded-md hover:bg-yellow-700 px-2 py-1">Update</button>
        {
            isUpdateClicked && (
                <form className="bg-slate-500 absolute flex flex-col gap-2 p-5 z-10">
                    <MdClose onClick={() => setIsUpdateClicked(!isUpdateClicked)} className="text-lg cursor-pointer rounded-full hover:bg-slate-100 w-6 h-6 hover:text-black font-bold"/>
                    <input type="text" placeholder="Type anything...." className="p-2 rounded-md bg-slate-200" required />
                    <button onClick={() => setIsUpdateClicked(!isUpdateClicked)} type="submit" className="bg-yellow-700 hover:bg-yellow-900 text-white  p-2 rounded-lg">Update data</button>
                </form>
            )
        }
        <button onClick={() => setIsCountClicked(!isCountClicked)} className="bg-slate-500 rounded-md hover:bg-slate-700 px-2 py-1">Count</button>
    </div>
    <span>API hit count: 0</span>
    </div>
  )
}

export default Header