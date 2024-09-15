import { PiNuclearPlantFill } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { GiReactor } from "react-icons/gi";

import { useDispatch, useSelector } from "react-redux";
import { fetchNuclearData } from "../store/slices/apiSlice";
import { useEffect } from "react";

const NuclearReactorDatabase = () => {
  const dispatch = useDispatch();
  const nuclearData = useSelector((state) => state.api.nuclear);
  console.log(nuclearData);
  const status = useSelector((state) => state.api.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNuclearData());
    }
  }, [status, dispatch]); // Removed isLoading from dependency array

  return (
    <div className="py-16 mt-20 px-6 md:px-20 md:pb-32 md:pt-10">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Reactor Database
      </h2>

      <div className="flex flex-wrap gap-x-[6rem]">
        {/* 1  */}
        <div className="flex text-start flex-col gap-y- ">
          <h1 className="text-[100px] text-white/40 font-semibold">
            {nuclearData.data.operable_reactors}
          </h1>
          <p className="text-lime1 text-[15px] mt-[-14px] flex items-center gap-x-2">
            <span>
              <PiNuclearPlantFill className="text-[17px]" />
            </span>{" "}
            Operable Reactors
          </p>
        </div>

        <div className="flex text-start flex-col gap-y- ">
          <h1 className="text-[100px] text-white/40 font-semibold">
            {nuclearData.data.global_share}
          </h1>
          <p className="text-lime1 text-[15px] mt-[-14px] flex items-center gap-x-2">
            <span>
              <MdElectricBolt className="text-[17px]" />
            </span>{" "}
            Share of Global Electricity Generation
          </p>
        </div>

        <div className="flex text-start flex-col gap-y- ">
          <h1 className="text-[100px] text-white/40 font-semibold">
            {nuclearData.data.under_construction}
          </h1>
          <p className="text-lime1 text-[15px] mt-[-14px] flex items-center gap-x-2">
            <span>
              <GiReactor className="text-[17px]" />
            </span>{" "}
            Reactors Under Construction
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuclearReactorDatabase;
