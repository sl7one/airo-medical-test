import sprite from "../../assets/sprite.svg";

export const Icon = ({ id , fill="black"}) => {
  return (
    <svg width={32} height={32} fill={fill}>
      <use href={sprite + `#${id}`}></use>
    </svg>
  );
};
