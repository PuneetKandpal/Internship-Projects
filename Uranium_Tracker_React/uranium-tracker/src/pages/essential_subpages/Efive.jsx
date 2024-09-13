import Breadcrumb from "../../components/essential_components/breadcrumb";
import EssentialSubHero from "../../components/essential_components/EssentialSubHero";
import Footer from "../../components/Footer";

const Efive = () => {
  return (
    <div>
      <Breadcrumb link={"/essentials/e5"} title={"The History Of Uranium"} />
      <EssentialSubHero
        heading={"The History Of Uranium"}
        subheading={
          "Uranium's journey from a little-known element to a central player in nuclear science and global geopolitics is marked by numerous significant milestones. These key events highlight the scientific discoveries, technological advancements, and historical moments that have shaped the use of Uranium and its impact on the world."
        }
      />

      <div className="bg-zinc-800/30 sec-1">
        <div className="px-6 md:px-20 py-16 md:py-28 mt-10">
          <div className="space-y-12">
            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  1789
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-chat-history-fill text-black1 text-[17px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-[18px] md:text-[19.5px] frank text-white font-semibold md:font-bold mt-1">
                  Discovery Of Uranium
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  The discovery of Uranium is credited to German chemist Martin
                  Heinrich Klaproth. Klaproth was a prominent figure in the
                  field of chemistry, known for his meticulous analytical
                  techniques and contributions to the identification of several
                  elements. In 1896, Henry Becquerel discovered that uranium
                  emits radiation spontaneously, marking the foundational
                  discovery of radioactivity and advancing the field of nuclear
                  physics.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  1938
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-planet-fill text-black1 text-[17px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-[18px] md:text-[19.5px] frank text-white font-semibold md:font-bold mt-1">
                  Discovery Of Nuclear Fission
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  In 1938, Otto Hahn and Fritz Strassmann discovered nuclear
                  fission, where Uranium atoms split into lighter elements,
                  releasing enormous amounts of energy and paving the way for
                  the development of nuclear power.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  1942
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-links-fill text-black1 text-[17.5px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-[18px] md:text-[19.5px] frank text-white font-semibold md:font-bold mt-1">
                  First Controlled Nuclear Chain Reaction
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  In 1942, Enrico Fermi and his team successfully initiated the
                  first controlled nuclear chain reaction in Chicago, paving the
                  way for the development of nuclear energy and atomic weaponry.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  1945
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-sword-fill text-black1 text-[17px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-[18px] md:text-[19.5px] frank text-white font-semibold md:font-bold mt-1">
                  The Atomic Bomb And The End Of World War II
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  In 1945, the detonation of atomic bombs over Hiroshima and
                  Nagasaki marked the first use of nuclear weapons in warfare,
                  leading to the end of World War II and ushering in the nuclear
                  age.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  1951
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-aed-electrodes-fill text-black1 mt-[2px] text-[17px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-xl capitalize text-white font-bold mt-1">
                  First electricity generated by a nuclear reactor
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  In 1951, the Experimental Breeder Reactor-I in Idaho generated
                  electricity using nuclear power for the first time, marking
                  the beginning of the nuclear energy industry.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  1957
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-rocket-fill text-black1 text-[17px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-xl capitalize text-white font-bold mt-1">
                  The launch of first commercial nuclear power plant
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  In 1957, Calder Hall in England became the world's first
                  commercial nuclear power plant, marking the transition of
                  nuclear energy from experimental to large scale public
                  electricity generation and setting the stage for the global
                  expansion of nuclear power.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  1968
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-book-fill text-black1 text-[17px] mt-[1px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-xl capitalize text-white font-bold mt-1">
                  The nuclear non-Proliferation treaty (NPT)
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  In 1968, the Nuclear Non-Proliferation Treaty (NPT) was signed
                  to prevent the spread of nuclear weapons, promote peaceful
                  uses of nuclear energy, and further the goal of global nuclear
                  disarmament.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  1986
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-fire-fill text-black1 text-[17px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-xl capitalize text-white font-bold mt-1">
                  Chernobyl nuclear disaster
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  In 1986, the Chernobyl nuclear disaster released massive
                  radioactive material due to a reactor explosion, causing
                  widespread contamination and leading to a global reevaluation
                  of nuclear safety.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-[87px] md:w-32 text-right pr-8 mt-[5.5px]">
                <span className="inline-block font-semibold inter px-4 py-1 bg-lime2 text-black1 rounded-full text-sm">
                  2011
                </span>
              </div>
              <div className="w-px bg-lime2/30 relative">
                <div className="absolute flex justify-center items-center w-8 h-8 rounded-full bg-lime2 -left-4 top-1">
                  <i className="ri-flashlight-fill text-black1 text-[17px]"></i>
                </div>
              </div>
              <div className="flex-1 pl-8 pb-8">
                <h2 className="text-xl capitalize text-white font-bold mt-1">
                  fukushima daiichi nuclear
                </h2>
                <p className="mt-2 text-white/45 font-light text-[16px]">
                  In 2011, the Fukushima Daiichi nuclear disaster, triggered by
                  a massive earthquake and tsunami in Japan, led to reactor
                  meltdowns and significant radioactive release, prompting a
                  global reassessment of nuclear safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Efive;
