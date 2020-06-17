import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import reducer from "./store"
import { FourOhFour } from "./ui/FourOhFour";
import { Home } from "./ui/Home";
import { AboutUs } from "./ui/AboutUs";
import "./index.css";
import {
  faDog,
  faEnvelope,
  faPencilAlt,
  faSignInAlt,
  faSortDown,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "./ui/shared/components/NavBar";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { Posts } from "./ui/posts/Posts";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

library.add(faPencilAlt, faUserCircle, faSortDown, faEnvelope, faSignInAlt, faKey, faDog);

const store = configureStore({reducer})

const Routing = (store) => (
  <>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/" component={Home}/>
            <Route component={FourOhFour}/>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </>
);
ReactDOM.render(Routing(store), document.querySelector('#root'));
