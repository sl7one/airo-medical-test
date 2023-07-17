import { Icon } from "../Icon/Icon";
import { IngredientsList } from "../IngredientsList/IngredientsList";

export const Ingredients = ({ingredients, method, brewers_tips}) => {
  return (
    <div className="ingredients-wrapper">
      <div className="tab-panel__content-wrapper">
        <p>
          <span className="headers">Hops: </span>
        </p>
        {<IngredientsList list={ingredients.hops} />}
      </div>

      <div className="tab-panel__content-wrapper">
        <p>
          <span className="headers">Malt: </span>
        </p>
        {<IngredientsList list={ingredients.malt} />}
      </div>

      <p>
        <span className="headers">Yeast: </span>
        {ingredients.yeast}
      </p>
      <p>
        <span className="headers">Fermentation: </span>
        {method.fermentation.temp.value} {method.fermentation.temp.unit}
      </p>
      <p>
        <span className="headers">Mesh: </span>
        {method.mash_temp
          .map(({ temp: { value, unit } }) => `${value} ${unit}`)
          .join("' ")}
      </p>

      {method?.twist && (
        <p>
          <span className="headers">Twist: </span>
          {method.twist}
        </p>
      )}

      <div className="brewers__tips">
        {<Icon id="icon-leaf" fill="yellowgreen" />}
        <p>
          <span className="headers">Brewers tips:</span> {brewers_tips}
        </p>
      </div>
    </div>
  );
};
