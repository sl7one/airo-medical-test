import { BearPage } from "../../pages/BearPage";
import { BearsListPage } from "../../pages/BearsListPage";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../../pages/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BearsListPage />} />
        <Route path="bears-list/:name" element={<BearPage />} />
      </Route>
    </Routes>
  );
};
