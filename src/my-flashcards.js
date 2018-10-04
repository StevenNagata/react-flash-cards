import React from 'react'
import NoFlashcards from './no-flashcards'

export default class MyFlashcards extends React.Component {
  render() {
    if (this.props.flashcards.length === 0) {
      return (
        <NoFlashcards takeToForm={this.props.takeToForm} />
      )
    }
    else {
      return (
        <div className="container p-2">
          <div className="row d-flex justify-content-center">
            {
              this.props.flashcards.map((card) => {
                const id = card.id
                const href = `#edit?uniqueId=${id}`
                return (
                  <div id={id} key={id} className="card bg-light mb-3 m-3 w-25">
                    <div className="card-body">
                      <p className="card-text m-1">Q: {card.question}</p>
                      <p className="card-text m-1">A: {card.answer}</p>
                      <a className="float-right" href={href}>&#9999;</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
}
