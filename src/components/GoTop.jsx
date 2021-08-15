import React from 'react'

const GoTop = ({ isVisible, scrollToTop }) => {

  return (
    <>
      {isVisible ? (<button onClick={scrollToTop} id="myBtn" title="Go to top">
        <span className="material-icons"> arrow_upward </span>
      </button>) : ""}
    </>
  )
}

export default GoTop
