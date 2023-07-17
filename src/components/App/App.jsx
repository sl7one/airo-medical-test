import { BearPage } from "../../pages/BearPage";
import { BearsListPage } from "../../pages/BearsListPage";
// import { MainPage } from "../../pages/MainPage";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/bears-list" element={<BearsListPage />} />
      <Route path="/bears-list/:name" element={<BearPage />} />
    </Routes>
  );
};
