import Breadcrumb from "../../components/essential_components/breadcrumb";
import EssentialSubHero from "../../components/essential_components/EssentialSubHero";

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
    </div>
  );
};

export default Eone;
