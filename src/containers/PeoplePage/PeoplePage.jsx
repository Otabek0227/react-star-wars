// libraries
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
// HOC
import { withErrorApi } from 'hocHelpers/withErrorApi';   
// Components
import PeopleList from 'components/PeoplePage/PeopleList'; 
import PeopleNavigation from 'components/PeoplePage/PeopleNavigation'; 
// Hooks
import { useQueryParams } from 'hooks/useQueryParams'; 
// Utils and Services
import { getApiResource } from 'utils/network'; 
import { getPeopleId, getPeopleImage, getPeoplePageId } from 'services/getPeopleData';
// Constants
import { API_PEOPLE } from 'constants/api'; 


function PeoplePage({ setErrorApi }) {
  const [people, setPeople] = useState([])
  const [prevPage, setPrevPage] = useState('')
  const [nextPage, setNextPage] = useState('')
  const [counterPage, setCounterPage] = useState(1)

  const queryPage = Number(useQueryParams().get('page'))

  const getResponse = async (url) => {
    const res = await getApiResource(url)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)

        return { id, name, img }
      })
      // state ga saqlash
      setPeople(peopleList)
      
      setNextPage(res.next)
      setPrevPage(res.previous)
      setCounterPage(getPeoplePageId(url))
    } 

    setErrorApi(false)
  }
  // Component Did Mount
  useEffect(() => {
    getResponse(`${API_PEOPLE}${queryPage}`)
  }, [])


  return (
    <>
      <PeopleNavigation getResponse={getResponse} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage} />
      {people ? <PeopleList people={people} /> : null}
    </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)