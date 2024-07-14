import { useAction } from "../../hooks/useAction";
import style from "./ValueApi.module.scss";
export const ValueApi = ({ value }) => {

  const { toggleAddFavorite } = useAction();

  return (
    <section className={style.infoRepo}>
      <div>
        <img src={value.owner.avatar_url} alt="" />
        <a href={value.html_url}>{value.name}</a>
        <h2>Число форков: {value.forks_count}</h2>
        <h3>Число звёзд: {value.stargazers_count}</h3>
        <button onClick={() => toggleAddFavorite(value)}>Добавить в избранное</button>
        <button onClick={() => open(value.html_url)}>Подробнее</button>
      </div>
    </section>
  );
};
