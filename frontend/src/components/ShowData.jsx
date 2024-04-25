const ShowData = ({ window }) => {
  return (
    <div className="flex flex-col justify-center items-center no-drag">
      <div className="flex flex-col mx-4 gap-3 justify-center items-center p-5 border rounded-lg max-w-full overflow-hidden">
      <h1 className="draggable-handle p-2 no-drag text-center font-bold text-xl">{window}</h1>
        <div className="flex flex-wrap gap-2 text-sm text-white font-semibold">
          <button className="bg-green-500 rounded-md hover:bg-green-700 px-3 py-1">Add</button>
          <button className="bg-yellow-500 rounded-md hover:bg-yellow-700 px-2 py-1">Update</button>
          <button className="bg-slate-500 rounded-md hover:bg-slate-700 px-2 py-1">Count</button>
        </div>
        <span>Show count: 0</span>
        <p className="text-center w-fit">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, deleniti.</p>
      </div>
    </div>
  );
};

export default ShowData;
