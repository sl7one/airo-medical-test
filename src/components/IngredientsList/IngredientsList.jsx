export const IngredientsList = ({ list }) => {
  return (
    <ul className="ingredients__list">
      {list.map(({ name, amount: { value, unit } }, idx) => (
        <li key={name + idx}>
          <p>
            {name} : <span className="headers value-span">{value}</span> {unit}
          </p>
        </li>
      ))}
    </ul>
  );
};
