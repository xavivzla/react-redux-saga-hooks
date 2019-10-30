import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import counter from './counter'
import jobs from './jobs'

export default history => combineReducers({
  router         : connectRouter(history),
  [counter.store]: counter.reducer,
  [jobs.store]   : jobs.reducer
})
