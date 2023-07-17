import sprite from "../../assets/sprite.svg";
import { IIcon } from "../interfaces/Icon.interface";

export const Icon = ({ id , fill="black"}:IIcon) => {
  return (
    <svg width={32} height={32} fill={fill}>
      <use href={sprite + `#${id}`}></use>
    </svg>
  );
};
