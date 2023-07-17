import { Icon } from "../Icon/Icon";

export const DeleteBtn = ({counter, onClick}) => {
  

  return (
    <button className="delete-button" type="button" onClick={onClick}>
      <Icon id="icon-bin" fill="red" />
      <span className="counter">{counter}</span>
    </button>
  );
};
