import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#view">My Flashcards</a>
          <a className="nav-item nav-link" href="#create">Create Flashcard</a>
          <a className="nav-item nav-link" href="#practice">Practice</a>
        </div>
      </div>
    </nav>
  )
}
