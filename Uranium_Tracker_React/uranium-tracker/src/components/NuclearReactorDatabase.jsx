import { PiNuclearPlantFill } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { GiReactor } from "react-icons/gi";

import { useDispatch, useSelector } from "react-redux";
import { fetchNuclearData } from "../store/slices/apiSlice";
import { useEffect } from "react";

const NuclearReactorDatabase = () => {
  const dispatch = useDispatch();
  const nuclearData = useSelector((state) => state.api.nuclear);
  const status = useSelector((state) => state.api.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNuclearData());
    }
  }, [status, dispatch]);

  return (
    <div className="py-16 mt-10 md:mt-28 px-6 md:px-20 md:pb-32 md:pt-10">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Reactor Database
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
        {/* 1 */}
        <div className="flex text-start flex-col py-9 bg-zinc-800/20 p-6 shadow-sm">
          <h1 className="text-[50px] mt-[-1rem] md:mt-[-2rem] md:text-[100px] text-white/40 font-semibold">
            {nuclearData.data.operable_reactors}
          </h1>
          <p className="text-lime1 text-[15px] md:mt-[-14px] flex items-center gap-x-2">
            <span>
              <PiNuclearPlantFill className="text-[17px]" />
            </span>{" "}
            Operable Reactors
          </p>
        </div>

        {/* 2 */}
        <div className="flex text-start flex-col py-9 bg-zinc-800/20 p-6 shadow-sm">
          <h1 className="text-[50px] mt-[-1rem] md:mt-[-2rem] md:text-[100px] text-white/40 font-semibold">
            {nuclearData.data.global_share}
          </h1>
          <p className="text-lime1 text-[15px] md:mt-[-14px] flex items-center gap-x-2">
            <span>
              <MdElectricBolt className="text-[17px]" />
            </span>{" "}
            Share of Global Electricity Generation
          </p>
        </div>

        {/* 3 */}
        <div className="flex text-start flex-col py-9 bg-zinc-800/20 p-6 shadow-sm">
          <h1 className="text-[50px] mt-[-1rem] md:mt-[-2rem] md:text-[100px] text-white/40 font-semibold">
            {nuclearData.data.under_construction}
          </h1>
          <p className="text-lime1 text-[15px] md:mt-[-14px] flex items-center gap-x-2">
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
