import { Route, Routes } from "react-router-dom";
import FirstStart from "./pages/FirstStart/FirstStart";
import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/first-start" Component={FirstStart} />
    </Routes>
  );
};

export default Router;
