export type Malt = {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
};

export type Hops = {
  add: string;
  attribute: string;
} & Malt;

type Ingredients = {
  hops: Hops[];
  malt: Malt[];
  yeast: string;
};

type MeshTempObj = {
  temp: { value: number; unit: string };
};

type Method = {
  fermentation: { temp: { value: string; unit: string } };
  mash_temp: MeshTempObj[];
  twist: string;
};

export interface IIngredients {
  ingredients: Ingredients;
  method: Method;
  brewers_tips: string;
}
