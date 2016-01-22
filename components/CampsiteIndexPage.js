import React from 'react';
import CampsiteList from './CampsiteList'

export default class CampsiteIndexPage extends React.Component {
  render() {
    var position = this.props.position;
    var campsites = this.props.campsites;
    var parks = this.props.parks;

    // First make an array of the campsites we want to show here
    let campsitesArray = [];
    for (var id in campsites) {
      campsitesArray.push(campsites[id]);
    }

    return (
      <div className="campsite-list">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <h1>Camping near you</h1>
          </div>
        </nav>
        <CampsiteList campsites={campsitesArray} parks={parks} position={position} />
      </div>
    )
  }
}