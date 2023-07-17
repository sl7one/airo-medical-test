type Volume = {
  value: number;
  unit: string;
};

export interface ICharacteristics {
  volume: Volume;
  boil_volume: Volume;
  attenuation_level: number;
  abv: number;
  ebc: number;
  ibu: number;
  ph: number;
  srm: number;
}
