import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterGroup from './component/CounterGroup';
import * as serviceWorker from './serviceWorker';
import reducer from "./reducer";
import {createStore} from "redux";
import { Provider } from "react-redux";
import ContainerGroup from './container/ContainerGroup';

const store = createStore(reducer);

ReactDOM.render( <Provider store={store}>
    <ContainerGroup defaultCount="3" />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
