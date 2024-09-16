const NuclearRecentConstructionStarts = ({ nuclearData }) => {
  return (
    <div className="py-16 mt-20 px-6 md:px-20 md:pb-32 md:pt-10">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Most Recent Construction Starts
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
                Total Generation (to end 2023) (TWh)
              </th>
              <th className="px-4 py-[11px] text-[14px] md:text-[15px] font-medium">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {nuclearData?.data?.recent_construction_starts?.map(
              (connection, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "" : ""
                  } text-white/60 hover:bg-zinc-800/20 border-b border-zinc-800`}
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
                    {connection["Total Generation (to end 2023) (TWh)"]}
                  </td>
                  <td className="px-4 py-[11px] text-[14px] font-light md:text-[15px]">
                    {connection.Location}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NuclearRecentConstructionStarts;
