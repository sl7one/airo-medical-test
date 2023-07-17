import { IDescription } from "../interfaces/Description.interface";

export const Description = ({
  first_brewed,
  description,
  contributed_by,
  food_pairing,
}: IDescription) => {
  return (
    <>
      <p>
        <span className="headers">First brewed:</span> {first_brewed}
      </p>
      <p>
        <span className="headers">Description:</span> {description}
      </p>
      <p>
        <span className="headers">Contributed:</span> {contributed_by}
      </p>
      <p>
        <span className="headers">Food pairing: </span>
        {food_pairing.join(", ")}
      </p>
    </>
  );
};
