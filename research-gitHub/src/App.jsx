import style from "./App.module.scss";
import { useState } from "react";
import { useGetGitHubApiQuery } from "./store/api/api";
import { useSelector } from "react-redux";
import { useThrottle } from "./hooks/useThrottle";
import { ValueApi } from "./components/ValueApi/ValueApi";
import { FavoritesRepo } from "./components/FavoritesRepo/FavoritesRepo";
import { ClipBoard } from "./components/ClipBoard/ClipBoard";

function App() {

  const [value, setValue] = useState("");

  const { data } = useGetGitHubApiQuery(value | null);

  const favorites = useSelector(state => state.favorites)

  const throttleSetValue = useThrottle((value) => {
    setValue(value);
  }, 1000);


  return (
    <>
      <section className={style.main}>
        <div className={style.inputsRepo}>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              throttleSetValue(e.target.value)
            }}
          />
          <ClipBoard valueItem={value}/>
        </div>

        <div className={style.ordinaryRepoAndFavoritesRepo}>
          <div className={style.infoRepo}>
            <h1>Список репозиториев:</h1>
            {data &&
              data.items &&
              data.items.map((item) => {
                return <ValueApi key={item.id} value={item} />;
              })}
          </div>

          <div>
            <h1>Список избранных репозиториев:</h1>
            {favorites.map((item) => (
              <FavoritesRepo key={item.id} value={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;