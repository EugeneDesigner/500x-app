import 'babel-polyfill'


import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as store from './store/configureStore'
import{Provider} from 'react-redux'
import{ Router, Route, browserHistory, IndexRedirect } from 'react-router'
import SearchApp from './containers/SearchApp'
import App from './containers/App'
import FavouriteApp from './containers/FavouriteApp'
import './stylesheets/style.scss'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App} path='/' >
        <IndexRedirect to="/search"/>
        <Route component={SearchApp} path='/search'/>
        <Route component={FavouriteApp} path='/favourites'/>
      </Route>
    </Router>
  </Provider>, document.getElementById('root'))
