import ChooseSide from 'components/HomePage/ChooseSide'

import styles from './HomePage.module.css'

export default function HomePage() {


  return (
    <div className='container'>
      <h1 className="header__text">Home Page</h1>
      <ChooseSide />
    </div>
  )
}
