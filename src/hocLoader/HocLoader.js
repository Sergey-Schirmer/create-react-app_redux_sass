import React from "react";

export default (propsName) =>(ChildComponent) => {
  return class hocloader extends React.Component {
    isEmpty() {
      return propsName.length>0;
    }

    loadingComponent() {
      return <p>hocloader<br/> <button onClick={()=>{window.location.reload()}}>hocloader</button></p>;
    }

    render() {
      return (this.isEmpty() ? <ChildComponent {...this.props}/> : this.loadingComponent());
    }
  }
}