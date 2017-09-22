import React, { Component } from 'react';
import {Provider} from "react-redux";
import store from '../store/store'
import WrapApp from '../hocLoader/WrapApp';

export default class NewApp extends Component {
  render() {
    return (
      <Provider key={module.hot ? Date.now() : store} store={store}>
        <WrapApp/>
      </Provider>
    )
  }
}