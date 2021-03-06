import React, { PropTypes } from 'react'

const Star = ({onClick, starred, quiet}) => {
  let icon = starred ? "star" : "star-empty"

  return (
    <div className={"star star-" + (starred ? "on" : "off")} onClick={onClick}>
      <span className={"glyphicon glyphicon-" + icon}></span>
    </div>
  )
}

Star.propTypes = {
  starred: PropTypes.bool,
  quiet: PropTypes.bool
}

export default Star
