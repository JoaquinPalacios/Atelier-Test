import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

// import MovieDetail from "../MovieDetail";


const ShowMovie = (movieId) => {
    const [result, setResult] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://www.swapi.tech/api/films/");
        const json = await res.json();
        setResult(json.result);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return new Promise((res) => 
    res(result.find((value) => value.properties.title === movieId)))
}

const ItemContainer = () => {
    const [films, setFilms] = useState([]);
    const { movieId } = useParams([]);
    console.log('params movieId container', movieId)

    useEffect(() => {
        ShowMovie(movieId).then((value) => {
            setFilms(value.properties.title)
        })
    }, [movieId])
    return (
        <h1>Hello World!</h1>
        // <h1>{films.properties.title}</h1>
            // <MovieDetail key={films.properties.title} films={films} />
    );
}
 
export default ItemContainer;