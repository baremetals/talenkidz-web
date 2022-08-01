import React from "react";
type PageProps = {
  setCategory: (category: string) => void;
};
function Search({ setCategory }: PageProps) {
  return (
    <div className="p-6 rounded-lg space-y-4 md:order-last">
      {/* Take this into a component */}
      <div className="w-full bg-yellow-400  py-6 px-3 rounded-xl  max-h-[250px]">
        <div className="relative">
          <img src="/search.svg" className="w-6 h-6 absolute left-1 top-2" />
          <input
            placeholder="Search"
            className="pl-8 py-2 rounded-lg text-md placeholder-black "
          />
        </div>
      </div>
      {/* Take this into a component */}
      <div className="">
        <div className="p-4  rounded-t-xl bg-blue-500 border-t-1 border-gray-500 ">
          <p className="font-semibold text-white text-center text-xl rounded-t-lg">
            Categories
          </p>
        </div>
        <div className="border-b border-l border-r border-gray-400 space-y-2 py-7">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex ml-3 items-center space-x-4">
                <input
                  type="checkbox"
                  value={`categroy ${i}`}
                  className="checked:bg-blue-400 ml-3 p-2 w-5 h-5"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <p className=" text-md">category {i} </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
