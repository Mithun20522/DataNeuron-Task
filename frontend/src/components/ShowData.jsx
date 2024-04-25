import { useContext, useEffect, useState } from "react";
import TestdataContext from "../context/testdata/testdataContext";

const ShowData = ({ window }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async() => {
      const res = await fetch('http://localhost:8080/api/testdata/get-data',{method:'GET'});
      const resData = await res.json();
      setData(resData);
    }
    getData();
  },[data])

  return (
    <div className="flex flex-col justify-center items-center no-drag">
      <div className="flex flex-col mx-4 gap-3 justify-center items-center p-5 border rounded-lg max-w-full overflow-hidden">
      <h1 className="draggable-handle p-2 no-drag text-center font-bold text-xl">{window}</h1>
        <p className="text-center w-fit">{data.content}</p>
      </div>
    </div>
  );
};

export default ShowData;
