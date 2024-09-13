import Breadcrumb from "../../components/essential_components/breadcrumb";
import E1EarlyUrUses from "../../components/essential_components/E1EarlyUrUses";
import E1NuclearFuelCycle from "../../components/essential_components/E1NuclearFuelCycle";
// import E1PeriodicTable from "../../components/essential_components/E1PeriodicTable";
import E1UraniumProp from "../../components/essential_components/E1UraniumProp";
import EssentialSubHero from "../../components/essential_components/EssentialSubHero";
import Footer from "../../components/Footer";

const Eone = () => {
  return (
    <div>
      <Breadcrumb link={"/essentials/e1"} title={"What Is Uranium?"} />
      <EssentialSubHero
        heading={"What Is Uranium?"}
        subheading={
          "Uranium is a naturally occurring element with the symbol U and atomic number 92. It is a dense, metallic element that plays a crucial role in the nuclear industry due to its unique properties, particularly its ability to sustain nuclear fission—a process where the nucleus of an atom splits into two smaller nuclei, releasing a significant amount of energy. This ability makes uranium the lime2 fuel used in nuclear reactors and a key material in nuclear weapons."
        }
      />
      <E1UraniumProp />
      {/* <E1PeriodicTable /> */}
      <E1EarlyUrUses />
      <E1NuclearFuelCycle />
      <Footer />
    </div>
  );
};

export default Eone;
