import { Loader } from "../components/Loader/Loader";
import { useBearsStore } from "../store/store";
import { shallow } from "zustand/shallow";
import {  Outlet } from "react-router-dom";
import { VideoBackground } from "../components/VideoBackground/VideoBackground";

export const Layout = () => {
  const { isLoading } = useBearsStore((state) => state, shallow);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Outlet />
          <VideoBackground />
        </>
      )}
    </div>
  );
};
