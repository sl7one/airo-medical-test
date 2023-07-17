import { useBearsStore } from "../../store/store";
import { shallow } from "zustand/shallow";
import useVirtual from "react-cool-virtual";
import { BearCard } from "../BearCard/BearCard";

export const BearsList = () => {
  const { bears, toggleChoosenItem } = useBearsStore(state => state, shallow);
  const { outerRef, innerRef, items } = useVirtual({
    itemCount: 15, 
    itemSize: 380, 
  });

  const handleClick = (e, id) => {
    e.preventDefault();
    toggleChoosenItem(id);
  };

  const bearsItems = bears.filter(({ isDeleted }) => !isDeleted);

  return (
    <div
      className="outer"
      style={{ width: "700px", height: "750px", overflow: "auto" }}
      ref={outerRef}>
      <div ref={innerRef}>
        {items.map(({ index, size }) => {
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
        })}
      </div>

    </div>
  );
};
