import React, { PropTypes } from 'react';
import Star from './Star'

export default class CampsiteListItem extends React.Component {
  distanceText() {
    var distance = this.props.distance;
    if (distance == undefined) {
      return "";
    }

    // Distance needs to be in metres
    var units = undefined
    if(distance > 1000) {
      distance /= 1000;
      units = "km";
    }
    else {
      units = "m"
    }
    return(distance.toFixed(0) + " " + units);
  }

  bearingText() {
    var bearing = this.props.bearing;
    // Dividing the compass into 8 sectors that are centred on north
    var sector = Math.floor(((bearing + 22.5) % 360.0) / 45.0);
    var sectorNames = [ "N", "NE", "E", "SE", "S", "SW", "W", "NW" ];
    return sectorNames[sector];
  }

  render() {
    return (
      <div className="campsite">
        <Star starred={this.props.starred}/>
        <div className="pull-right distance">{this.distanceText()} {this.bearingText()}</div>
        <div className="name">{this.props.campsiteName}</div>
        <div className="park">{this.props.parkName}</div>
      </div>
    );
  }
}

CampsiteListItem.propTypes = {
  campsiteName: PropTypes.string.isRequired,
  parkName: PropTypes.string,
  distance: PropTypes.number,
  bearing: PropTypes.number
}
