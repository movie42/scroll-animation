import { Route, Routes } from "react-router-dom";
import FirstStart from "./pages/FirstStart/FirstStart";
import Home from "./pages/Home/Home";
import ParallaxScroll from "./pages/ParallaxScroll/ParallaxScroll";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/first-start" Component={FirstStart} />
      <Route path="/parallax-scroll" Component={ParallaxScroll} />
    </Routes>
  );
};

export default Router;
