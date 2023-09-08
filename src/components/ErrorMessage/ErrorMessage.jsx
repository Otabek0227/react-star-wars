import UiVideo from 'ui/UiVideo'
import video from './video/han-solo.mp4'

import styles from './ErrorMessage.module.css'

export default function ErrorMessage() {
    return (
        <div className="container">
            <p className={styles.text}>
                The dark side of the force has won. <br />
                We cannot display data.<br />
                Come back when we fix everything
            </p>
            <UiVideo src={video} classes={styles.errorVideo} />
        </div>
    )
}
