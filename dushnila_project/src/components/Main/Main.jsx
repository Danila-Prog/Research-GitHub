import { useEffect, useState } from "react";
import axios from "axios";
import { DaysDushnilaAndImg } from "../DaysDushnilaAndImg/DaysDushnilaAndImg.jsx";
import { ParametrsOfDushnilaBad } from "../ParametrsOfDushnila/ParametrsBad/ParametrsOfDushnilaBad.jsx";
import { ParametrsOfDushnilaGood } from "../ParametrsOfDushnila/ParametrsGood/ParametrsOfDushnilaGood.jsx";
import {DushnilaEmotionBad} from '../DushnilaEmotion/DushnilaEmotionBad/DushnilaEmotionBad.jsx'
import {DushnilaEmotionGood} from '../DushnilaEmotion/DushnilaEmotionGood/DushnilaEmotionGood.jsx'
import style from "./Main.module.scss";
export const Main = () => {

  const [param, setParam] = useState({ temp: 0, co2: 0 });

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://dushnila.gooddelo.com/data")
        .then((res) => setParam({ temp: res.data.temp, co2: res.data.co2 }));
    }, 1000);
  }, [param]);

  return (
    <main className={style.MainInfo}>
      {param.temp < 27 && param.co2 < 800 ? (
        <>
          <section className={style.leftInformation}>
         
              <DushnilaEmotionGood />
              
              <DaysDushnilaAndImg />
              
          </section>

          <ParametrsOfDushnilaGood
                paramtemp={param.temp}
                paramco2={param.co2}
              />
        </>
      ) : (
        <>
          <section className={style.leftInformation}>
            
              <DushnilaEmotionBad />
              
              <DaysDushnilaAndImg />

          </section>
          <ParametrsOfDushnilaBad
                paramtemp={param.temp}
                paramco2={param.co2}
          />
        </>
      )}
    </main>
  );
};
