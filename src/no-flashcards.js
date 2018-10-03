import React from 'react'

export default function NoFlashcard(props) {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div>
        <h3>You have no flash cards</h3>
        <div className="container-fluid d-flex justify-content-center">
          <a className="btn btn-dark" href="#create">Create flash cards</a>
        </div>
      </div>
    </div>
  )
}
