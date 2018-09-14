import React from 'react'
import { Link } from 'gatsby'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-dark flex-column flex-md-row bg-primary col-md-2 d-none d-md-block sidebar">
        <div className="container">
          <Link className="col-md-12" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll col-md-12">
            <ul className="navbar-nav bd-navbar-nav flex-column">
              <li
                className={
                  location.pathname === '/icons/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/icons/" className="nav-link">
                  Icons
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
