import Breadcrumb from "../../components/essential_components/breadcrumb";
import EssentialSubHero from "../../components/essential_components/EssentialSubHero";
import Footer from "../../components/Footer";
import AccordionItemLeft from "../../components/essential_components/E8AccordionLeft";
import AccordionItemRight from "../../components/essential_components/E8AccordionRight";
import { GlossaryContext } from "../../context/GlossaryContext";
import Loader from "../../components/Loader";

import { useContext } from "react";

const Eeight = () => {
  const { data, loading, error } = useContext(GlossaryContext); // Changed homeData to data

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  document.querySelectorAll(".accordion").forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.querySelector("svg").classList.toggle("rotate-180");
      this.nextElementSibling.classList.toggle("hidden");
    });
  });

  return (
    <div>
      <Breadcrumb link={"/essentials/e8"} title={"Uranium Glossary"} />
      <EssentialSubHero
        heading={"Uranium Glossary"}
        subheading={
          "This glossary provides clear definitions of important terms in nuclear science and technology. It covers foundational concepts like actinides and activation products, as well as details about radiation types, such as alpha and beta particles. You'll also find explanations of reactor types, including boiling water reactors (BWRs) and breeder reactors, and essential metrics like burnup and activity. This guide is a useful resource for understanding the core principles and terminology in the field."
        }
      />

      <div className="w-full bg-zinc-800/30 sec-1">
        <div className="px-6 md:px-20 py-10 md:py-20 mt-10">
          <div
            id="cardContainer"
            className="mt-8 flex flex-wrap justify-between gap-y-8"
          >
            {/*  left  */}
            <div className="w-full md:w-[47%] px-5">
              <div className="max-w-2xl mx-auto space-y-4 md:pb-10 pt-4">
                <AccordionItemLeft glossaryData={data} />
              </div>
            </div>

            {/* right  */}
            <div className="w-full md:w-[47%] px-5">
              <div className="max-w-2xl mx-auto space-y-4 md:pb-10 pt-4">
                <AccordionItemRight glossaryData={data}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* accordion  */}

      <Footer />
    </div>
  );
};

export default Eeight;
