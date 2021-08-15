import React from 'react';
import upArrow from "../images/up-arrow.svg"

const GoTop = ({ isVisible, scrollToTop }) => {

  return (
    <>
      {isVisible ? (<button onClick={scrollToTop} id="myBtn" title="Go to top">
        <img src={upArrow} alt="" />
      </button>) : ""}
    </>
  )
}

export default GoTop
