import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import UiButton from 'ui/UiButton';  

import styles from './PeopleNavigation.module.css'

export default function PeopleNavigation({ getResponse, prevPage, nextPage, counterPage }) {

  const onPrevPage = () => getResponse(prevPage)
  const onNextpage = () => getResponse(nextPage)

  return (
    <div className='d-flex w-100 justify-content-center'>
      <Link to={`https://otabek0227.github.io/react-star-wars/people/?page=${prevPage && counterPage - 1}`} className={styles.navigationBtn}>
        <UiButton onClick={onPrevPage} disabled={!prevPage}>Previous</UiButton>
      </Link>
      <Link to={`https://otabek0227.github.io/react-star-wars/people/?page=${nextPage && counterPage + 1}`} className={styles.navigationBtn}>
        <UiButton onClick={onNextpage} disabled={!nextPage}>Next Page</UiButton>
      </Link>
    </div>
  )
}
PeopleNavigation.propTypes = {
  getResponse: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}
