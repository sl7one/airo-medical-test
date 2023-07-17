import { useBearsStore } from "../../store/store";
import { shallow } from "zustand/shallow";
import useVirtual from "react-cool-virtual";
import { BearCard } from "../BearCard/BearCard";
import { IsDeletedBear } from "../interfaces/IsDeletedBear.type";
import { Loader } from "../Loader/Loader";

export const BearsList = () => {
  const { bears, toggleChoosenItem, isLoading } = useBearsStore(
    state => state,
    shallow
  );
  const { outerRef, innerRef, items } = useVirtual<HTMLDivElement>({
    itemCount: 15,
    itemSize: 320,
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.preventDefault();
    toggleChoosenItem(id);
  };

  const bearsItems = bears.filter(({ isDeleted }: IsDeletedBear) => !isDeleted);

  return (
    <div
      className="outer"
      style={{ width: "700px", height: "620px", overflow: "auto" }}
      ref={outerRef}>
      <div ref={innerRef}>
        {isLoading ? (
          <Loader />
        ) : (
          items.map(({ index, size }) => {
            const { id, name, image_url, description, isChoosed } =
              bearsItems[index];

            return (
              <BearCard
                key={index}
                index={index}
                size={size}
                isChoosed={isChoosed}
                id={id}
                name={name}
                image_url={image_url}
                description={description}
                handleClick={handleClick}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
