var React = require('react');
var PositionRelationship = require('../libs/PositionRelationship');

module.exports = Campsite = React.createClass({
  distanceText: function() {
    if (this.props.position.lat == undefined || this.props.position.lng == undefined) {
      return "";
    };

    var distance = PositionRelationship.distanceInMetres(this.props.position, this.props.userPosition);
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
  },

  bearingText: function() {
    if (this.props.position.lat == undefined || this.props.position.lng == undefined) {
      return "";
    };
    
    var bearing = PositionRelationship.bearingInDegrees(this.props.position, this.props.userPosition);
    // Dividing the compass into 8 sectors that are centred on north
    var sector = Math.floor(((bearing + 22.5) % 360.0) / 45.0);
    var sectorNames = [ "N", "NE", "E", "SE", "S", "SW", "W", "NW" ];
    return sectorNames[sector];
  },

  render: function() {
    return (
      <div className="campsite">
        <div className="pull-right distance">{this.distanceText()} {this.bearingText()}</div>
        <div className="name">{this.props.name}</div>
        <div className="park">{this.props.park}</div>
      </div>
    );
  }
});