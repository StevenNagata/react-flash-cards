import React from 'react'
import NoFlashcards from './no-flashcards'

const style = {
  editIcon: {
    position: 'absolute',
    right: '.8rem',
    bottom: '.8rem'
  },
  deleteIcon: {
    position: 'absolute',
    right: '.8rem',
    top: '.8rem'
  },
  diff: {
    display: 'inline-block',
    width: '15px',
    height: '15px',
    'borderRadius': '50%',
    position: 'absolute',
    left: '.7rem',
    top: '.7rem'
  },
  text: {
    border: 'none'
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
                let diff = ''
                if (card.difficulty === 'easy') {
                  diff = 'bg-success'
                }
                else if (card.difficulty === 'moderate') {
                  diff = 'bg-warning'
                }
                else if (card.difficulty === 'hard') {
                  diff = 'bg-danger'
                }
                else {
                  diff = 'bg-dark'
                }
                return (
                  <div id={id} key={id} className="card bg-light mb-3 m-3 w-100">
                    <div className="card-body">
                      <h5 className="card-text m-1 p-1">{card.question}</h5>
                      <hr />
                      <textarea className="ml-2" readOnly rows="4" cols="100" value={card.answer} style={style.text}/>
                      <a className="text-dark"
                        style={style.editIcon}
                        href={href}><strong>&#9998;</strong></a>
                      <a className={diff} style={style.diff}></a>
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
