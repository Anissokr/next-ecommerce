const Filter = () => {
  return (
    <div className="mt-12 flex justify-between ">
      <div className="flex gap-6 flex-wrap ">
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]  ">
            <option>Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>

        </select>
        <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"></input>
       
        <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"></input>
 
       
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]  ">
            <option>Size</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>

        </select>
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]  ">
            <option>Color</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>

        </select>
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]  ">
            <option>Category</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>

        </select>
      </div>
      <div className="">
      
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400  ">
            <option>Sort by</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>

        </select>
      </div>
    </div>
  );
};

export default Filter;
