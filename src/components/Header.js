import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header className="Header">
    <Link className="Header-link" to="/">
      <h1 className="Header-title">We Took A Trip...</h1>
    </Link>
  </header>
)

export default Header
