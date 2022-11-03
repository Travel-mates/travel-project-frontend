import { useEffect } from "react";
import axios from "axios";

function Form() {
  useEffect(() => {
    const fetchPosts = async () => {
      
      const res = await axios.get("/destination");
      if (res.data.success) {
        
        console.log("res.data");
        console.log(res.data);
      }
      
    };
  
  }, []);



  return (
    <>
      <div className="px-2 py-12 ">
        <div className="flex flex-no-wrap items-start">
          <form className="w-full ">
            <div className="py-4 px-2">
              <div className="bg-white rounded shadow mt-7 py-7">
                <div className="mt-10 px-7">
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Name
                      </p>
                      <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Location
                      </p>
                      <input className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-gray-300 mt-2 px-7">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Description
                  </p>
                  <div className="mt-10 border border-gray-300 rounded">
                    <textarea
                      className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                      placeholder="Start typing here ..."
                      defaultValue={" "}
                    />
                  </div>
                </div>

                <hr className="h-[1px] bg-gray-100 my-14" />
                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                  <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full ">
                    Cancel
                  </button>
                  <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
