import React from 'react'
import Logo from "../images/TC-logo.svg"
import GitHub from "../images/github.svg"
const Header = () => {
  return (
    <header className="nav-bar">
      <img className="nav-item" src={Logo} alt="" />
      <a
        className="nav-item"
        href="https://github.com/TendaiChikwiri"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GitHub} alt="GitHub" />
      </a>
    </header>
  )
}

export default Header
