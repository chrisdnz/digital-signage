import React, { Component } from 'react';

import Carousel from 'nuka-carousel';


export default class App extends Component {
  constructor(props) {
      super(props);

  }

  render() {
    return (
      <div className="container">
        <Carousel autoplay={true} slideWidth={1} autoplayInterval={5000} wrapAround={true}>
        <img src="http://localhost:4000/cfs/files/Images/TQRRZ4x36zigPHNjS"/>
        <img src="http://localhost:4000/cfs/files/Images/ECLtDnkbjSd8wGKkw"/>
        <img src="http://localhost:4000/cfs/files/Images/9oZKk4RfJkSakdtsr"/>
      </Carousel>
      </div>
    );
  }
}
