import Breadcrumb from "../../components/essential_components/breadcrumb";
import EssentialSubHero from "../../components/essential_components/EssentialSubHero";

const Eseven = () => {
  return (
    <div>
      <Breadcrumb link={"/essentials/e7"} title={"Uranium Processing"} />
      <EssentialSubHero
        heading={"Uranium Processing"}
        subheading={
          "Uranium processing is the critical step that transforms raw uranium ore into a refined form capable of fueling nuclear reactors.This intricate process ensures that uranium's immense energy potential is harnessed efficiently, powering the world with clean and reliable energy"
        }
      />
    </div>
  );
};

export default Eseven;
