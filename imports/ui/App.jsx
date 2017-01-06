import React, { Component } from 'react';

import Carousel from 'nuka-carousel';


export default class App extends Component {
  constructor(props) {
      super(props);
      
  }

  render() {
    return (
      <div className="container">
        <Carousel autoplay={true} slideWidth={1} autoplayInterval={5000} dragging={true} wrapAround={true}>
        <img src="http://localhost:3000/cfs/files/Images/vy9G27Had49EywjGb"/>
        <img src="http://localhost:3000/cfs/files/Images/LFyemnydnrwMbfwDs"/>
        <img src="http://localhost:3000/cfs/files/Images/n3MDBdWipTXNpWdCQ"/>
      </Carousel>
      </div>
    );
  }
}
