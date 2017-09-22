import React, {Component} from 'react'
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './appProps';
import AppComponent from "../../components/AppComponent";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.actionHandler = this.actionHandler.bind(this);
  }

  actionHandler(){
    this.props.appAction('new text '+ Date.now());
  }

  render() {
    let {text} = this.props;
    return (
      <div className="AppComponent">
        <AppComponent action={this.actionHandler} text={text}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

