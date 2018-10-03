import React from 'react'

export default class MyFlashcards extends React.Component {
  render() {

    return (
      <div className="container p-2">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {
              this.props.flashcards.map((card, index) => {
                return (
                  <div key={index} className="card bg-light mb-3 m-3 w-25">
                    <div className="card-body">
                      <p className="card-text m-2 h5">Q: {card.question}</p>
                      <p className="card-text m-2 h6">A: {card.answer}</p>
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
