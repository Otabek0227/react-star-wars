import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './UiVideo.module.css'
import { useEffect, useRef } from 'react'

const UiVideo = ({
    src,
    playbackRate = 1.0,
    classes
}) => {
    const videoRef = useRef(null)
    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, [])

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className={classNames(styles.video, classes)}
        >
            <source src={src} />
        </video>
    )
}

UiVideo.propTypes = {}

export default UiVideo