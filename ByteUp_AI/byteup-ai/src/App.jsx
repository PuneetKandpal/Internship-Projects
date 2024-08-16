import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Blogs from "./Pages/Blogs";
import AnimatedCursor from "./Components/AnimatedCursor";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full min-h-[100vh] ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <AnimatedCursor />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
