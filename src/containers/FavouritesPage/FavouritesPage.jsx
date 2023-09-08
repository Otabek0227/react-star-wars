import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PeopleList from 'components/PeoplePage/PeopleList'  

import styles from './FavouritesPage.module.css'

export default function FavouritesPage() {
    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favouriteReducer)
    console.log(useSelector(state => state))
    useEffect(() => {
        const arr = Object.entries(storeData)

        if (arr.length) {
            const res = arr.map(item => ({
                id: item[0],
                ...item[1],
            }))
            setPeople(res)
        }
    }, [])


    return (
        <div className='container'>
            <h1 className='header__text'>Favourites</h1>
            {people.length > 0
                ? <PeopleList people={people} />
                : <h2 className={styles.comment}>No data</h2>
            }
        </div>
    )
}
