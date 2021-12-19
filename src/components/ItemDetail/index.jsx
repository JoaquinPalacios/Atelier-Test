// import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const ItemDetail = ({result}) => {
    // const [result, setResult] = useState([]);
    const { title } = useParams

    // const fetchData = async () => {
    //     const res = await fetch("https://www.swapi.tech/api/films/");
    //     const json = await res.json();
    //     setResult(json.result);
    // }
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // let movieId =result.map((value) => {
    //     {value.properties.title};
    // })

    return (
        <div>
            {result
            .filter((value) => value.properties._id === title)
            .map((value) => (
               <h2>{value.properties.title}</h2>
            ))}
        </div>
    );
}
 
export default ItemDetail;