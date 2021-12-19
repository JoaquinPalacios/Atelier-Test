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
                <NavLink to='./' 
                className={styles.navbarHome} 
                style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#f4f4f4',
                  background: isActive ? '#7600dc' : '#7600dc',
                })}>Home</NavLink>
             {result.map((value) => (
                 <span className={styles.navbarItems}>
                         <NavLink to={`/MovieDetail/${value.properties.title}`} style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#d3d3d3',
                  background: isActive ? '#7600dc' : '#7600dc',
                  textDecoration: isActive ? 'none' : 'none'
                })}>{value.properties.title}</NavLink>
                 </span>                                  
              ))}
            </div>
        </>
    );
}
 
export default Navbar;