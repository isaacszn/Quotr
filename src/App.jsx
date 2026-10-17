import { BrowserRouter,  Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ScripturesListing from "./pages/ScripturesListing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="app/scriptures/:cardId" element={<ScripturesListing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
