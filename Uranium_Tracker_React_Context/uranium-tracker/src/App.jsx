import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Investments from "./pages/Investments";
import Essentials from "./pages/Essentials";
import Forum from "./pages/Forum";
import NewsPage from "./pages/NewsPage";
import Eone from "./pages/essential_subpages/eone";
import Etwo from "./pages/essential_subpages/Etwo";
import Ethree from "./pages/essential_subpages/Ethree";
import Efour from "./pages/essential_subpages/Efour";
import Efive from "./pages/essential_subpages/Efive";
import Esix from "./pages/essential_subpages/Esix";
import Eseven from "./pages/essential_subpages/Eseven";
import Eeight from "./pages/essential_subpages/Eeight";
import Nuclear from "./pages/Nuclear";
import Calender from "./pages/Calender";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import ForgotPassword from "./pages/ForgetPassword";
import { HomeProvider } from "./context/HomeContext";
import { NewsProvider } from "./context/NewsContext";
import { InvestmentProvider } from "./context/InvestmentContext";
import { NuclearProvider } from "./context/NuclearContext";
import { CalendarProvider } from "./context/CalendarContext";
import { GlossaryProvider } from "./context/GlossaryContext";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <HomeProvider>
                <Home />
              </HomeProvider>
            }
          />
          <Route
            path="/news"
            element={
              <NewsProvider>
                <News />
              </NewsProvider>
            }
          />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route
            path="/investments"
            element={
              <InvestmentProvider>
                <Investments />
              </InvestmentProvider>
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
          <Route path="/essentials/e1" element={<Eone />} />
          <Route path="/essentials/e2" element={<Etwo />} />
          <Route path="/essentials/e3" element={<Ethree />} />
          <Route path="/essentials/e4" element={<Efour />} />
          <Route path="/essentials/e5" element={<Efive />} />
          <Route path="/essentials/e6" element={<Esix />} />
          <Route path="/essentials/e7" element={<Eseven />} />
          <Route
            path="/essentials/e8"
            element={
              <GlossaryProvider>
                <Eeight />
              </GlossaryProvider>
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
          <Route
            path="/nuclear"
            element={
              <NuclearProvider>
                <Nuclear />
              </NuclearProvider>
            }
          />
          <Route
            path="/calender"
            element={
              <CalendarProvider>
                <Calender />
              </CalendarProvider>
            }
          />
          <Route
            path="/signup"
            element={
              <div>
                <SignUp />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <LogIn />
              </div>
            }
          />
          <Route
            path="/forgetpassword"
            element={
              <div>
                <ForgotPassword />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
