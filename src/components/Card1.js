import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Card1 = (props) => (

    



  <div className="flex-wrap w-full">
    <div className="w-full  py-1 px-6  justify-center items-center ">
      <div>
        <div className="max-w-xs h-64 flex flex-col justify-between bg-white  rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <div className="text-center">
              <h4 className="text-gray-800  font-bold mb-3">Gold</h4>
            </div>

            <p className="text-gray-800  text-sm">
              Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt,
              neque porro quisquam est, quid malum, sensu iudicari, sed ut
              alterum.
            </p>
            <h4 className="text-gray-800  font-bold mt-3">Contact No: 0764567993</h4>
            <h4 className="text-gray-800  font-bold mb-3">$ 45</h4>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <Link
                to="/packages"
                className="transition duration-150 ease-in-out  hover:bg-[#050f66] hover:text-white  text-gray-900 px-5  py-1 text-xl border-4 border-[#412ac2] rounded-full"
              >
                Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Card1;
