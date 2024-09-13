import Main from "../../../ByteUp_AI/byteup-ai/src/Pages/Main";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Investments from "./pages/Investments";
import Essentials from "./pages/Essentials";
import Forum from "./pages/Forum";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route
            path="/news"
            element={
              <div>
                <News />
              </div>
            }
          />
          <Route
            path="/investments"
            element={
              <div>
                <Investments />
              </div>
            }
          />
          <Route
            path="/essentials"
            element={
              <div>
                <Essentials />
              </div>
            }
          />
          <Route
            path="/forum"
            element={
              <div>
                <Forum />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
