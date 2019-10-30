import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import jobsAction from 'reducers/jobs'

const {
  addJob
} = jobsAction.creators

const Jobs = () => {
  const dispatch = useDispatch()
  const {
    items
  } = useSelector(state => state.jobs)

  return (
    <div>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>

      <button onClick={() => dispatch(addJob())}>add</button>
    </div>
  )
}

export default Jobs
