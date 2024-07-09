import style from "./DaysDushnilaAndImg.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export const DaysDushnilaAndImg = () => {
  
  return (
    <div className={style.additionalCardsFromStrangler}>
      <div className={style.daysDushnila}>
        <h1>Дней без душноты 0</h1>
        <button>
          История <FaArrowRightLong width={21} height={12} />
        </button>
      </div>
      <div className={style.imgDushnilaCompany}>
        <img
          src="https://s1.1zoom.ru/big7/425/China_Jiuzhaigou_park_Parks_Lake_Mountains_Autumn_530368_2560x1706.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
