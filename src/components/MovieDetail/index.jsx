import styles from './MovieDetail.module.css';

const MovieDetail = ({film}) => {

    const peoples = film.properties?.characters.map(async (characterURL) => {
        try {
            const people = await fetch(characterURL).json().results;
            if (people.ok) {
                setTimeout(() => {
                    return people;
                }, 1000)
            };
        }
        catch (err) {
            console.error('Error peoples', err)
        }
    })
    console.log('peoples MovieDetail', peoples)

    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h2>{film.properties?.title}</h2>
                <p>{film.description}</p>
                <p>Release date: {film.properties?.release_date}</p>
                <p>Director: {film.properties?.director}</p>
                <p>Producer: {film.properties?.producer}</p>
                <p>Characters:</p>
                {peoples?.map(people=> (
                    <ul id={styles.list}>
                        <li>{people.properties?.name}</li>
                    </ul>
                ))}
            </div>            
        </div>
    );
}
 
export default MovieDetail;