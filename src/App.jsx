import { BrowserRouter,  Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
