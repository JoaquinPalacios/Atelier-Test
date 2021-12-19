import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

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
            <Router>
                <div className={styles.navbarContainer}>
                    <NavLink to='./' className={styles.navbarHome}>Home</NavLink>
                 {result.map((value) => (
                     <span className={styles.navbarItems}>
                             <Link to={value.properties.title} style={{ textDecoration: 'none' }}>{value.properties.title}</Link>
                     </span>                                  
                  ))}
                  {/* <Route path='value/:id' component={ItemDetail} /> */}
                </div>
            </Router>
        </>
    );
}
 
export default Navbar;