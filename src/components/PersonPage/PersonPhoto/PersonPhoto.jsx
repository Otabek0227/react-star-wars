import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { setPrsonToFavourite, removePrsonFromFavourite } from 'store/actions'

// images
import favourFill from './img/favourite-fill.svg'
import favour from './img/favourite.svg'

import styles from './PersonPhoto.module.css'

export default function PersonPhoto({ personId, img, personName, personFavourite, setPersonFavourite }) {
  const dispatch = useDispatch()

  const dispatchFavouritePeople = () => {
    if (personFavourite) {
      dispatch(removePrsonFromFavourite(personId))
      setPersonFavourite(false)
    } 
    else if (personId && personName && img) {
      dispatch(setPrsonToFavourite({
        [personId]: {
          name: personName,
          img,
        }
      }))
      setPersonFavourite(true)
    }
  }

  return (
    <div className={styles.personImg__container}>
      <img src={img} alt={personName} className={styles.person__img} />
      <img className={styles.favour} onClick={dispatchFavouritePeople} src={personFavourite ? favourFill : favour} alt="star icon" />
    </div>
  )
}

PersonPhoto.propTypes = {
  personId: PropTypes.string,
  src: PropTypes.string,
  personName: PropTypes.string,
}
