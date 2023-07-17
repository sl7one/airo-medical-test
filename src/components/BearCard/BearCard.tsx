import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { IBearCard } from "../interfaces/BearCard.interface";

export const BearCard = ({
  index,
  size,
  isChoosed,
  id,
  name,
  image_url,
  description,
  handleClick,
}: IBearCard) => {
  
  const gradient = (index: number) =>
    `linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(${200 + index * 5},${
      100 + index * 5
    },${200},1) 100%)`;

  return (
    <div style={{ height: `${size}px` }}>
      {/* ---------------------------------- */}
      <div
        className={isChoosed ? "bears__item choosed" : "bears__item"}
        key={id}
        onContextMenu={e=> handleClick(e, id)}>
        <Link
          to={"/bears-list/" + name}
          style={{
            backgroundImage: gradient(index),
          }}>
          <div className="bears__info">
            <h2
              className="bears__header"
              data-tooltip-id={id + "_title"}
              data-tooltip-content={name}
              data-tooltip-place="bottom-start">
              {name}
            </h2>
            <Tooltip id={id + "_title"} />
            <p
              className="bears__description"
              data-tooltip-id={id + "_description"}
              data-tooltip-content={description}
              data-tooltip-place="right-start"
              data-tooltip-position-strategy="fixed"
              data-tooltip-variant="info">
              {description}
            </p>
            <Tooltip id={id + "_description"} className="description-tooltip" />
            <p className="headers">Click for deatils</p>
          </div>
          <img className="bears__img" src={image_url} alt={name} />
        </Link>
      </div>
      {/* ----------------------------------- */}
    </div>
  );
};
