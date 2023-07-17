import { Icon } from "../Icon/Icon";
import { IDeleteBtn } from "../interfaces/DeleteBtn.interface";

export const DeleteBtn = ({ counter, onClick }: IDeleteBtn) => {
  return (
    <button className="delete-button" type="button" onClick={onClick}>
      <Icon id="icon-bin" fill="red" />
      <span className="counter">{counter}</span>
    </button>
  );
};
