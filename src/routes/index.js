import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import loadable from 'loadable-components'

import Loading from 'components/Common/Loading'

const Dashboard = loadable(() => import(/* webpackChunkName: "Dashboard" */ 'containers/Dashboard'), {
  LoadingComponent: () => <Loading />,
  modules         : [ 'containers/Dashboard' ]
})

const Jobs = loadable(() => import(/* webpackChunkName: "Jobs" */ 'containers/views/Jobs'), {
  LoadingComponent: () => <Loading />
})

export default history => (
  <ConnectedRouter history={history}>
    <Route component={Dashboard} exact path='/' />
    <Route component={Jobs} exact path='/jobs' />
  </ConnectedRouter>
)
