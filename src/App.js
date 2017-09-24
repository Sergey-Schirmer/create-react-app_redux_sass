import React, { Component } from 'react';
import NewApp from "./provider/NewApp";
import {whyDidYouUpdate} from 'why-did-you-update';

whyDidYouUpdate(React);
class App extends Component {
  render() {
    return (
      <NewApp/>
    );
  }
}

export default App;
