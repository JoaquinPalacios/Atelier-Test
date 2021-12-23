import { useEffect, useState } from 'react';

import styles from './MovieDetail.module.scss';

const MovieDetail = ({ film }) => {
    const [characters, setCharacters] = useState([])

    const peoples = film?.properties?.characters.map(async (characterURL) => {
        try {
            const response = await fetch(characterURL);
            const data = await response.json();
            // const people = data.results;
            if (data.response.ok) {
                setCharacters((oldPeople) => [...oldPeople, ...data.results]);
            //   setTimeout(() => {
            //     return people;
            //   }, 1000);
            }
        } catch (err) {
          console.error("Error peoples", err);
        }
      });
    console.log('peoples MovieDetail', peoples)
    Promise.all([peoples]);
    useEffect(() => {
        setTimeout(() => setCharacters([peoples]), 500)
    //   setCharacters([peoples]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log("characters", characters);

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h2>{film.properties?.title}</h2>
                <h4>{film.description}</h4>
                <p>Episode: {film.properties?.episode_id}.</p>
                <p>Opening Crawl: <i>{film.properties?.opening_crawl}</i></p>
                <div className={styles.tooltip}>Important dates: <i><small>hover me please</small></i>
                    <span className={styles.tooltiptext}>Created: {film.properties?.created}, Edited: {film.properties?.edited}, Release date: {film.properties?.release_date}.</span>
                </div>
                <p>Director: {film.properties?.director}.</p>
                <p>Producer: {film.properties?.producer}.</p>
                <p>Characters:</p>
                {characters?.map(people=> (
                    <ul id={styles.list}>
                        <li>{people?.properties?.name}</li>
                    </ul>
                ))}
            </div>            
        </div>
    );
}
 
export default MovieDetail;