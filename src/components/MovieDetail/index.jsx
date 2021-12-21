// import { useEffect, useState } from "react";

import styles from './MovieDetail.module.css';

const MovieDetail = ({films}) => {
    // const [results, setResults] = useState([]);

    // const urls = {
    //     people: "https://www.swapi.tech/api/people/",
    //     planets: "https://www.swapi.tech/api/planets/",
    //     starships: "https://www.swapi.tech/api/starships/",
    //     vehicle: "https://www.swapi.tech/api/vehicle/",
    //     species: "https://www.swapi.tech/api/species/"
    //   }
      
      
    //   const fetchApis = async () => {
    //     const responses = await Promise.all(Object.entries(urls).map(async ([ key, url ]) => {
    //       const res = await fetch(url)
    //       return [ key, (await res.json()).results ]
    //     }))
      
    //     setResults(Object.fromEntries(responses))
    //   }
    //   console.log('results apiss', results)

    // useEffect(() => {
    //     fetchApis();
    // }, []);

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h2>{films.properties?.title}</h2>
                <p>{films.description}</p>
                <p>Release data: {films.properties?.release_date}</p>
                <p>Director: {films.properties?.director}</p>
                <p>Producer: {films.properties?.producer}</p>
                <p>Characters: {films.properties?.producer}</p>
                <p>People</p>
            </div>            
        </div>
    );
}
 
export default MovieDetail;