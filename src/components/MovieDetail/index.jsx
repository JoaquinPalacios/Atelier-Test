import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const { movieId } = useParams();

    const [result, setResult] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://www.swapi.tech/api/films/");
        const json = await res.json();
        setResult(json.result);
    }
    useEffect(() => {
        fetchData();
    }, []);

    let movieMatch = (result.find(value) => value.properties.title == movieId)

    

    return (
        <div>
            <h2>
            {result
            .find((value) => {value.properties.title == movieId})}
            </h2>
        </div>
    );
}
 
export default MovieDetail;