import React from 'react'

export default class MyFlashcards extends React.Component {
  render() {
    if (this.props.flashcards.length === 0) {
      return (
        <div className="container-fluid d-flex justify-content-center">
          <div>
            <div>You have no flash cards</div>
            <a href="#create"><button onClick={this.props.takeToForm} type="button" className="btn btn-dark">Create flash cards</button></a>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="container p-2">
          <div className="container">
            <div className="row d-flex justify-content-center">
              {
                this.props.flashcards.map((card, index) => {
                  return (
                    <div key={index} className="card bg-light mb-3 m-3 w-25">
                      <div className="card-body">
                        <p className="card-text m-1">Q: {card.question}</p>
                        <p className="card-text m-1">A: {card.answer}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    }
  }
}
