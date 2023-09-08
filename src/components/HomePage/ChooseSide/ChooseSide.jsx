import cn from 'classnames'
import PropTypes from 'prop-types'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL, } from 'context/ThemeProvider'; 

import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';


import styles from './ChooseSide.module.css'

const ChooseSideItem = ({ theme, text, img, classes }) => {
    const { _, change } = useTheme()

    return (
        <div
            className={cn(styles.item, styles[classes])}
            onClick={() => change(theme)}
        >
            <span className={styles.item__header}>{text}</span>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    )
}
ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string,
}


export default function ChooseSide() {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light Side',
            img: imgLightSide,
            classes: 'item__light'
        },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: imgDarkSide,
            classes: 'item__dark'
        },
        {
            theme: THEME_NEUTRAL,
            text: 'I\'m Han Solo',
            img: imgFalcon,
            classes: 'item__neutral'
        }
    ]

    return (
        <div className={styles.container}>
            {elements.map((item, index) => (
                <ChooseSideItem
                    key={index}
                    theme={item.theme}
                    text={item.text}
                    img={item.img}
                    classes={item.classes}
                />
            ))}
        </div>
    )
}
