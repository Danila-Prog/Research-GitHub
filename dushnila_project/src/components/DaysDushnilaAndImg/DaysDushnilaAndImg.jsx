import style from "./DaysDushnilaAndImg.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export const DaysDushnilaAndImg = () => {
  return (
    <section className={style.additionalCardsFromStrangler}>

      <div className={style.daysDushnila}>
        <h1>Дней без душноты 0</h1>
        <button>
          История <FaArrowRightLong width={21} height={12} />
        </button>
      </div>

      <div className={style.imgDushnilaCompany}>
        <img
          src="https://papik.pro/grafic/uploads/posts/2023-04/1681551478_papik-pro-p-logotip-sberbanka-na-prozrachnom-fone-vekt-31.png"
          alt="Картинка компании"
        />
      </div>

    </section>
  );
}
