import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL, useTheme } from 'context/ThemeProvider'
import Favourite from 'components/Favourite'

import imgDroid from './img/droid.svg'
import imgLightSaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'
import burger from './img/burger.svg'
import times from './img/times.svg'

import styles from './Header.module.css'

export default function Header() {
  const isTheme = useTheme()
  const [logo, setLogo] = useState(imgDroid)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT: setLogo(imgLightSaber); break;
      case THEME_DARK: setLogo(imgSpaceStation); break;
      case THEME_NEUTRAL: setLogo(imgDroid); break;
      default: setLogo(imgDroid);
    }
  }, [isTheme])

  const showNavbar = () => {
    console.log('first')
    setShowNav(true)
  }
  const hideNavbar = () => {
    setShowNav(false)
  }


  return (
    <div className='container'>
      <div className={styles.header__content}>
        <img className={styles.logo} src={logo} alt={isTheme.theme} />
        <ul className={showNav ? 'tr-0' : ''}>
          <li><NavLink onClick={hideNavbar} to='/react-star-wars/'>Home</NavLink></li>
          <li><NavLink onClick={hideNavbar} to='people/?page=1'>People</NavLink></li>
          <li><NavLink onClick={hideNavbar} to='search'>Search</NavLink></li>
          <li><NavLink onClick={hideNavbar} to='not-found'>Not Found</NavLink></li>
          <li><NavLink onClick={hideNavbar} to='fail'>Fail</NavLink></li>
          <li onClick={hideNavbar} className={styles.closer}><img src={times} alt='times' /></li>
        </ul>

        <Favourite />

        <div onClick={showNavbar} className={styles.opener}><img src={burger} alt='burger' /></div>
      </div>
    </div>
  )
}
