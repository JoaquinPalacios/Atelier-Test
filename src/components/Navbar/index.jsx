import { useState } from "react";
import {  Link } from "react-router-dom";

const Navbar = () => {
    const [result, setResult] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://www.swapi.tech/api/films/");
        const json = await res.json();
        setResult(json.result);
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <>
        {result.map((value, key) =>  {
            <nav>
                <li>
                    <Link
                </li>
            </nav>
        })}
        </>
    );
}
 
export default Navbar;