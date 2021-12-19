import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

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
            <div className={styles.navbarContainer}>
                <NavLink to='./' className={styles.navbarHome}>Home</NavLink>
             {result.map((value) => (
                 <span className={styles.navbarItems}>
                         <NavLink to={`/MovieDetail/${value.properties.title}`} style={{ textDecoration: 'none' }}>{value.properties.title}</NavLink>
                 </span>                                  
              ))}
            </div>
        </>
    );
}
 
export default Navbar;