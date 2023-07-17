import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";

export const BackBtn = () => {
  return (
    <div className="back-btn">
      <Link to="/bears-list">
        <Icon id="icon-arrow-left2" fill="white" />
      </Link>
    </div>
  );
};
