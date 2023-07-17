import { useEffect } from "react";
import { BearsList } from "../components/BearsList/BearsList";
import { DeleteBtn } from "../components/DeleteBtn/DeleteBtn";
import { useBearsStore } from "../store/store";
import { shallow } from "zustand/shallow";
import { Loader } from "../components/Loader/Loader";
import { VideoBackground } from "../components/VideoBackground/VideoBackground";

export const BearsListPage = () => {
  const { bears, deleteChoosedItems, fetch, page, setPage, isLoading } =
    useBearsStore(state => state, shallow);

  const lenght = bears.filter(({ isDeleted }) => isDeleted).length;

  //first fetch
  useEffect(() => {
    if (bears.length > 0) return;
    fetch();
  }, [fetch, bears.length]);

  const handleClick = () => {
    deleteChoosedItems();
    if (lenght >= 10 * page) {
      setPage();
      fetch(page + 1);
    }
  };

  const counter = bears.filter(
    ({ isChoosed, isDeleted }) => isChoosed && !isDeleted
  ).length;

  return (
    <>
      <div className="container">
        {isLoading ? <Loader /> : <BearsList />}
        {counter > 0 ? (
          <DeleteBtn counter={counter} onClick={handleClick} />
        ) : null}
      </div>
      <VideoBackground />
    </>
  );
};
