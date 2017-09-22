import React, {Component} from 'react';
import '../styles/App.css';

export default class AppComponent extends Component {
  addItem() {
    const {text} = this.props;
    return text.map((element, i) => <p key={i}>{element.text}</p>);
  }

  render() {
    let {text, action} = this.props;

    console.log(text);
    return (
    <div className="AppComponent">
      content <a className='add-text' onClick={action} href="#">add new text</a>
      {this.addItem()}
    </div>
    )
  }
}