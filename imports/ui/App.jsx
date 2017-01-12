import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { createContainer } from 'meteor/react-meteor-data';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Carousel>
          {this.props.codigos.map(codigo => <img src={`http://localhost:4000/cfs/files/Images/${codigo.Codigo}`}/>)}
        </Carousel>
      </div>
    );
  }
}

export default createContainer(props => {
  let data = conn.subscribe("codigos");
  return {
    codigos: Codigos.find().fetch(),
    ready: data.ready()
  }
}, App)
