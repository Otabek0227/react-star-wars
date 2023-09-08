import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import PersonInfo from 'components/PersonPage/PersonInfo' 
import PersonPhoto from 'components/PersonPage/PersonPhoto' 
import PersonLinkBack from 'components/PersonPage/PersonLinkBack' 
import UiLoading from 'ui/UiLoading/UiLoading' 
import { API_PERSON } from 'constants/api' 
import { withErrorApi } from 'hocHelpers/withErrorApi' 
import { getApiResource } from 'utils/network' 
import { getPeopleImage } from 'services/getPeopleData' 

import styles from './PersonPage.module.css'


const PersonFilms = React.lazy(() => import('components/PersonPage/PersonFilms'))

function PersonPage({ setErrorApi }) {
  const storeData = useSelector(store => store.favouriteReducer)
  const { id } = useParams()
  const [personId, setPersonId] = useState('')
  const [personName, setPersonName] = useState('')
  const [personFavourite, setPersonFavourite] = useState(false)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personInfo, setPersonInfo] = useState([])
  const [personFilms, setPersonFilms] = useState([])

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`)
      if (res) {
        setPersonName(res.name)
        setPersonId(id)
        setPersonPhoto(getPeopleImage(id))
        res.films.length && setPersonFilms(res.films)
        storeData[id] ? setPersonFavourite(true) : setPersonFavourite(false);

        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Gender', data: res.gender },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Skin Color', data: res.skin_color },
        ])
        setErrorApi(false)
      } else setErrorApi(true)
    })()
  }, [])

  return (
    <div className="container">
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            img={personPhoto}
            personName={personName}
            personId={personId}
            personFavourite={personFavourite}
            setPersonFavourite={setPersonFavourite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <div className={styles.relative}>
              <Suspense fallback={<UiLoading />}>
                <PersonFilms personFilms={personFilms} />
              </Suspense>
              {/* <UiLoading /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage)
