import style from '../ValueApi/ValueApi.module.scss'
export const FavoritesRepo = ({ value }) => {
  return (
    <section className={style.infoRepo}>
      <img src={value.owner.avatar_url} alt="" />
      <a href={value.html_url}>{value.name}</a>
      <h2>Число форков: {value.forks_count}</h2>
      <h3>Число звёзд: {value.stargazers_count}</h3>
    </section>
  );
};

