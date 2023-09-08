import { useNavigate } from 'react-router-dom'
import arrow from './img/left.svg'

import styles from './PersonLinkBack.module.css'

export default function PersonLinkBack() {
    const navigate = useNavigate()
    const handleGoBack = e => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <a href='#' onClick={handleGoBack} className={styles.link}>
            <img src={arrow} alt="go back" className={styles.img} />
            <span className={styles.text}>Go Back</span>
        </a>
    )
}
