import Navbar from "./Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full min-h-[100vh] ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Navbar />
    </div>
  );
};

export default App;
