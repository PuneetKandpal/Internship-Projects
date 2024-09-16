const NuclearTopLoadFactor = ({ nuclearData }) => {
  return (
    <div className="py-16 bg-zinc-800/20 mt-5 px-6 md:px-20 md:pb-32 md:pt-28">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Top Load Factor (2023)
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left border border-zinc-800  rounded-lg shadow-md">
          <thead>
            <tr className="bg-zinc-800/50 border-b border-zinc-800 text-white/90">
              <th className="px-4 py-[11px] text-[14px] md:text-[15px] font-medium">
                Reactor Name
              </th>
              <th className="px-4 py-[11px] text-[14px] md:text-[15px] font-medium">
                Model
              </th>
              <th className="px-4 py-[11px] text-[14px] md:text-[15px] font-medium">
                Process
              </th>
              <th className="px-4 py-[11px] text-[14px] md:text-[15px] font-medium">
                Net Capacity (MWe)
              </th>
              <th className="px-4 py-[11px] text-[14px] md:text-[15px] font-medium">
                Construction Start
              </th>
              <th className="px-4 py-[11px] text-[14px] md:text-[15px] font-medium">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {nuclearData?.data?.top_load_factor?.map((connection, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "" : ""
                } text-white/60 hover:bg-black1 border-b border-zinc-800`}
              >
                <td className="px-4 py-[11px] text-[14px] font-medium md:text-[15px] text-lime1">
                  {connection["Reactor Name"]}
                </td>
                <td className="px-4 py-[11px] text-[14px] font-light md:text-[15px]">
                  {connection.Model}
                </td>
                <td className="px-4 py-[11px] text-[14px] font-light md:text-[15px]">
                  {connection.Process}
                </td>
                <td className="px-4 py-[11px] text-[14px] font-light md:text-[15px]">
                  {connection["Net Capacity (MWe)"]}
                </td>
                <td className="px-4 py-[11px] text-[14px] font-light md:text-[15px]">
                  {connection["Construction Start"]}
                </td>
                <td className="px-4 py-[11px] text-[14px] font-light md:text-[15px]">
                  {connection.Location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NuclearTopLoadFactor;
