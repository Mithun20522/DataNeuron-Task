import {useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getDataFailure, getDataStart, getDataSuccess } from "../redux/testdataSlice";
const ShowData = ({ window }) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    
    const getData = async() => {
      const res = await fetch('https://dataneuron-task-backend.onrender.com/api/testdata/get-data',{method:'GET'});
      const resData = await res.json();
      if(res.ok){
        setData(resData);
      }
    }
    getData();
  },[data])

  return (
    <div className="flex flex-col justify-center items-center no-drag">
      <div className="flex flex-col mx-4 gap-3 justify-center items-center p-5 border rounded-lg max-w-full overflow-hidden">
      <h1 className="draggable-handle p-2 no-drag text-center font-bold text-xl">{window}</h1>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Name: {data.name}</p>
          <span className="font-semibold">Age: {data.age}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
