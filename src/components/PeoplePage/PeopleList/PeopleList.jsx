import cn from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './PeopleList.module.css';


export default function PeopleList({ people }) {
    return (
        <div className={cn("container", styles.list__container)}>
            <div className='row'>
                {people.map(({ id, name, img }) => (
                    <div key={id} className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl'>
                        <div className={styles.list__card}>
                            <Link to={`/${id}`}>
                                <img src={img} alt={name} />
                                <p>{name}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}
/*
birth_year: "33BBY"
eye_color: "red"
films: (6) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/']
gender: "n/a"
hair_color: "n/a"
height: "96"

mass: "32"
name: "R2-D2"
skin_color: "white, blue"



*/