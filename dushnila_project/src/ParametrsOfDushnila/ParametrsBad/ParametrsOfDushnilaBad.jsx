import style from "./ParametrsOfDushnilaBad.module.scss";

export const ParametrsOfDushnilaBad = ({ paramtemp, paramco2 }) => {
  return (
    <>
      <section className={style.section}>
        <h1>{paramtemp} ℃</h1>
        <h2>Температура</h2>
        <h1>{paramco2} ppm</h1>
        <h2>CO2</h2>
      </section>
    </>
  );
};
