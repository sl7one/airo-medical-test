import { useParams } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useBearsStore } from "../store/store";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BackBtn } from "../components/BackBtn/BackBtn";
import { Description } from "../components/Description/Description";
import { Characteristics } from "../components/Characteristics/Characteristics";
import { Ingredients } from "../components/Ingredients/Ingredients";

export const BearPage = () => {
  const { name } = useParams();
  const { getByName } = useBearsStore(state => state, shallow);
  const [item] = useState(getByName(name));
  const {
    name: bearName,
    boil_volume,
    attenuation_level,
    abv,
    brewers_tips,
    contributed_by,
    description,
    ebc,
    first_brewed,
    food_pairing,
    ibu,
    image_url,
    ingredients,
    method,
    ph,
    srm,
    volume,
  } = item;

  return (
    <>
      <div className="container">
        <div className="bear__page">
          <div className="bear__title">
            <h1>
              <BackBtn /> {bearName}
            </h1>
            <img className="bears__img" src={image_url} alt={name} />
          </div>
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Characteristics</Tab>
              <Tab>Ingredients</Tab>
            </TabList>

            <TabPanel>
              <Description
                first_brewed={first_brewed}
                description={description}
                contributed_by={contributed_by}
                food_pairing={food_pairing}
              />
            </TabPanel>
            <TabPanel>
              <Characteristics
                volume={volume}
                boil_volume={boil_volume}
                attenuation_level={attenuation_level}
                abv={abv}
                ebc={ebc}
                ibu={ibu}
                ph={ph}
                srm={srm}
              />
            </TabPanel>
            <TabPanel>
              <Ingredients
                ingredients={ingredients}
                method={method}
                brewers_tips={brewers_tips}
              />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};
