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
        <Carousel speed={1000} easing="linear" autoplay={true} slideWidth={1} autoplayInterval={this.props.ads.map(ad => ad.timeOut)} wrapAround={true} decorators={[]}>
          {this.props.codigos.map(codigo => <img  onLoad={() => {window.dispatchEvent(new Event('resize'));}} src={`https://unitec-anuncios.herokuapp.com/cfs/files/Images/${codigo.Codigo}`} key={codigo._id}/>)}
        </Carousel>
      </div>
    );
  }
}

export default createContainer(props => {
  let data = conn.subscribe("codigos");
  let time = conn.subscribe("ads");
  return {
    codigos: Codigos.find().fetch(),
    ads: Ad.find({}).fetch(),
    ready: data.ready(),
    adready: time.ready()
  }
}, App)
