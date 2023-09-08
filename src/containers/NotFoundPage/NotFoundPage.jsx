import { useLocation } from 'react-router-dom/dist'
import notFound from './img/404th_legion_logo.webp'

import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
    const location = useLocation()

    return (
        <div className={styles.notFound}>
            <div className='row'>
                <img src={notFound} alt="404 not Found"  className='col-12 col-sm-4'/>
                <h3 className='col-12 col-sm-4'>404 not Found</h3>
            </div>
            <h4>No match for: {location.pathname}</h4>
        </div>
    )
}
