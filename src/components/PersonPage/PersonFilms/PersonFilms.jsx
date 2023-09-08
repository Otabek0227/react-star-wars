import { useEffect, useState } from 'react'
import styles from './PersonFilms.module.css'
import { makeConcurrentRequest } from 'utils/network'; 

export default function PersonFilms({ personFilms }) {
    const [filmNames, setFilmNames] = useState([])

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms
            const response = await makeConcurrentRequest(filmsHTTPS);

            setFilmNames(response);
        })();
    }, [personFilms]);

    return (
        <ul className={styles.wrapper}>
            {filmNames
                .sort((a, z) => a.episode_id - z.episode_id)
                .map(({title, episode_id}) => (
                    <li className={styles.list__item} key={episode_id}>
                        <span className={styles.episode}>Episode {episode_id}</span>
                        <span className={styles.colon}> : </span>
                        <span className={styles.title}>{title}</span>
                    </li>
                ))
            }
        </ul>
    )
}
