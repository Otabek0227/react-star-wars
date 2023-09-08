import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

import styles from './SearchPageInfo.module.css'

const SearchPageInfo = ({ people }) => (
    <div className={styles.peopleList}>
        {
            people.length > 0
                ? (
                    <Row>
                        {people.map(({ id, name, img }) => (
                            <Col xs={12} sm={6} md={4} key={id} className={styles.peopleList__item}>
                                <Link to={`/people/${id}`}>
                                    <img className={styles.person__photo} src={img} alt={name} />
                                    <p className={styles.person__name}>{name}</p>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                )
                : <h3 className={styles.person__comment}>No Result</h3>
        }
    </div>
)

export default SearchPageInfo

SearchPageInfo.propTypes = {
    people: PropTypes.array
}