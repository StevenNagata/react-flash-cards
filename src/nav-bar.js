import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <div className="collapse navbar-collapse">
        <a className="font-weight-bold navbar-brand" href="#">Flashcard App</a>
        <div className="navbar-nav">
          <a className="nav-item nav-link font-weight-bold" href="#view">Cards</a>
          <a className="nav-item nav-link font-weight-bold" href="#create">Create</a>
          <a className="nav-item nav-link font-weight-bold" href="#practice">Practice</a>
        </div>
      </div>
    </nav>
  )
}
