export const Characteristics =({volume, boil_volume, attenuation_level, abv, ebc, ibu, ph, srm})=>{
    return <><p>
    <span className="headers">Volume:</span>{" "}
    <span className="headers value-span">{volume.value}</span>{" "}
    {volume.unit}
  </p>
  <p>
    <span className="headers">Boil volume:</span>{" "}
    <span className="headers value-span">{boil_volume.value}</span>{" "}
    {boil_volume.unit}
  </p>
  <p>
    <span className="headers">Attenuation:</span> {attenuation_level}
  </p>
  <p>
    <span className="headers">ABV:</span> {abv}
  </p>
  <p>
    <span className="headers">EBC:</span> {ebc}
  </p>
  <p>
    <span className="headers">IBU:</span> {ibu}
  </p>
  <p>
    <span className="headers">PH:</span> {ph}
  </p>
  <p>
    <span className="headers">SRM:</span> {srm}
  </p></>
}