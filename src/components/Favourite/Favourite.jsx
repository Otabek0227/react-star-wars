import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import icon from './img/bookmark.svg'

import styles from './Favourite.module.css'

export default function Favourite() {
    const storeData = useSelector(store => store.favouriteReducer)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length) 
    });

    return (
        <div className={styles.container}>
            <Link to='favourites'>
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="bookmark icon" />
            </Link>
        </div>
    )
}
