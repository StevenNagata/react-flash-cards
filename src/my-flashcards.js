import React from 'react'
import NoFlashcards from './no-flashcards'

const style = {
  editIcon: {
    position: 'absolute',
    right: '1rem',
    bottom: '1rem'
  },
  deleteIcon: {
    position: 'absolute',
    right: '1rem',
    top: '1rem'
  }
}

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
                      <p className="card-text m-1">{card.question}</p>
                      <hr />
                      <p className="card-text text-success m-1">{card.answer}</p>
                      <a className="text-dark" style={style.editIcon} href={href}><strong>&#9998;</strong></a>
                      <a className="text-dark" onClick={() => this.props.deleteCard(id)} href="#view" style={style.deleteIcon}>&#10005;</a>
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
