import EssentialsCards from "../components/EssentialsCards";
import EssentialsHero from "../components/EssentialsHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Essentials = () => {
  return (
    <div>
      <Navbar />
      <EssentialsHero />
      <EssentialsCards />
      <Footer />
    </div>
  );
};

export default Essentials;
