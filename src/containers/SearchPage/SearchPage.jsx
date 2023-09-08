import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { withErrorApi } from 'hocHelpers/withErrorApi'
import { Container } from 'reactstrap'
import SearchPageInfo from 'components/SearchPage/SearchPageInfo'
import { getApiResource } from 'utils/network'
import { getPeopleId, getPeopleImage } from 'services/getPeopleData'
import { API_SEARCH } from 'constants/api'

import styles from './SearchPage.module.css'
import { debounce } from 'lodash'

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [people, setPeople] = useState([])

  const getResponse = async param => {
    const res = await getApiResource(`${API_SEARCH}${param}`)
    console.log(param)
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)
        return {
          id,
          name,
          img
        }
      })

      setPeople(peopleList)
      setErrorApi(false)
    } else {
      setErrorApi(true)
    }
  }


  const debouncedGetResponse = useCallback(
    debounce(value => getResponse(value), 300),
    []
  )

  const handleInputChange = event => {
    const value = event.target.value

    setInputSearchValue(value)
    debouncedGetResponse(value)
  }

  return (
    <Container>
      <h1 className="header__text">Search</h1>
      <input
        type="text"
        onChange={handleInputChange}
        value={inputSearchValue}
        className={styles.searchInput}
        placeholder='Input character`s name'
      />
      <SearchPageInfo people={people} />
    </Container>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage)