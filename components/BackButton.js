import React from 'react'

// Ugh
import createBrowserHistory from 'history/lib/createBrowserHistory';
var browserHistory = createBrowserHistory();

export default class Header extends React.Component {
  navigateBack() {
    browserHistory.goBack();
    return false;
  }

  render() {
    return (
      <button className="btn btn-link navbar-link navbar-text pull-left" onClick={this.navigateBack}>
        <span className="glyphicon glyphicon-chevron-left back" aria-hidden="true"></span>
      </button>
    )
  }
}
