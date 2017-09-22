import React, {Component} from 'react';
import hocLoader from './HocLoader';
import AppContainer from "../containers/appContainer/AppContainer";

class WrapApp extends Component {
  render() {
    return (
      <div className="container clearfix">
        <AppContainer/>
      </div>
    )
  }
}

export default hocLoader('name')(WrapApp);