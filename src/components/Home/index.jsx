import { useEffect, useState } from "react";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import styles from './Home.module.css';

const Home = () => {
  const [result, setResult] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  const fetchData = async () => {
    const res = await fetch("https://www.swapi.tech/api/films/");
    const json = await res.json();
    setResult(json.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addFav = (id) => {
    setFavourites([...favourites, id]);
  };

  const removeFav = (id) => {
    setFavourites([...favourites.filter((found) => found !== id)]);
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const filteredMovies = result.filter((film) =>
    film.properties.title.toLowerCase().includes(searchFilm)
  );

  const favouriteMovies = filteredMovies.filter((movie) =>
    favourites.includes(movie._id)
  );
  const unFavouriteMovies = filteredMovies.filter(
    (movie) => !favourites.includes(movie._id)
  );

  return (
    <>
      <h1>List of Films</h1>
      <div className={styles.inputStyle}>
        <input
          type="text"
          value={searchFilm}
          placeholder="Search films.."
          onChange={(e) => setSearchFilm(e.target.value)}
        />
      </div>
      {favouriteMovies.map((value, key) => {
        return (
          <table key={key} className={styles.containerTable}>
            <tbody className={styles.films}>
              <tr>
                <td>
                  {value.properties.title}{" "}
                  <b onClick={() => removeFav(value._id)}><FaHeart color="#b0d688" /></b>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
      {unFavouriteMovies.map((value, key) => {
        return (
          <table key={key} className={styles.containerTable}>
            <tbody className={styles.films}>
              <tr>
                <td>
                  {value.properties.title}{" "}
                  <b onClick={() => addFav(value._id)}><FaRegHeart /></b>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </>
  );
};
export default Home;