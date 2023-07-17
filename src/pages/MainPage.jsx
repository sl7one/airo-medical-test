import { Loader } from "../components/Loader/Loader";
import { useBearsStore } from "../store/store";
import { shallow } from "zustand/shallow";
import { Navigate } from "react-router-dom";

export const MainPage = () => {
  const { isLoading } = useBearsStore(state => state, shallow);

  return (
    <div>
      <div>HELLO START</div>
      {isLoading ? <Loader /> : <Navigate to="/bears-list" />}
    </div>
  );
};
