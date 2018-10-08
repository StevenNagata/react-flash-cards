import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <div className="collapse navbar-collapse">
        <a className="navbar-brand" href="#">Flashcard App</a>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#view">Cards</a>
          <a className="nav-item nav-link" href="#create">Create</a>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Practice</a>
            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <a className="dropdown-item text-success" href="#practice?difficulty=easy">Easy</a>
              <a className="dropdown-item text-warning" href="#practice?difficulty=moderate">Moderate</a>
              <a className="dropdown-item text-danger" href="#practice?difficulty=hard">Hard</a>
              <a className="dropdown-item text-primary" href="#practice">All</a>
            </div>
          </li>
        </div>
      </div>
    </nav>
  )
}
