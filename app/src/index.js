import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FourOhFour } from './pages/FourOhFour'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import './index.css'
import {
  faEnvelope,
  faPencilAlt,
  faSignInAlt,
  faSortDown,
  faUserCircle,
  faDog
} from '@fortawesome/free-solid-svg-icons'
import { NavBar } from './shared/components/NavBar'
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey'
import { Posts } from './pages/posts/Posts'
import { applyMiddleware, createStore } from 'redux'
import { combinedReducers } from './shared/reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

library.add(faPencilAlt, faUserCircle, faSortDown, faEnvelope, faSignInAlt, faKey, faDog)

const store = createStore(combinedReducers, applyMiddleware(thunk))
const Routing = (store) => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/" component={Home}/>
          <Route component={FourOhFour}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  </>
)
ReactDOM.render(Routing(store), document.querySelector('#root'))
