import React from 'react'

export default function NoFlashcard(props) {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div>
        <h3>You have no flash cards</h3>
        <div className="container-fluid d-flex justify-content-center">
          <a href="#create"><button onClick={props.takeToForm} type="button" className="btn btn-dark">Create flash cards</button></a>
        </div>
      </div>
    </div>
  )
}
