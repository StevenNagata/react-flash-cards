import React from 'react'

function Difficulty({ difficulty, isHighlighted, onClick, children }) {
  const className = isHighlighted
    ? 'btn btn-secondary text-secondary bg-dark'
    : 'btn btn-secondary text-dark'
  return (
    <button type="button" className={className} onClick={onClick} data-difficulty={difficulty}>
      {children}
    </button>
  )
}

export default class FlashcardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      difficulty: this.props.isNew ? null : this.props.flashcard.difficulty
    }
    this.saveCard = this.saveCard.bind(this)
    this.saveEditedCard = this.saveEditedCard.bind(this)
    this.highlight = this.highlight.bind(this)
  }
  highlight(event) {
    this.setState({
      difficulty: event.target.getAttribute('data-difficulty')
    })
  }
  saveCard(event) {
    event.preventDefault()

    const { uniqueId } = this.props
    const newCard = {
      question: event.target.currentQuestion.value,
      answer: event.target.currentAnswer.value,
      id: uniqueId,
      difficulty: this.state.difficulty
    }
    event.target.reset()
    this.props.saveFlashcard(newCard)
    this.setState({
      isEasy: false,
      isModerate: false,
      isHard: false,
      difficulty: 'none'
    })
  }
  saveEditedCard(event) {
    event.preventDefault()
    const uniqueId = parseInt(this.props.flashcard.id, 10)
    const editedCard = {
      question: event.target.currentQuestion.value,
      answer: event.target.currentAnswer.value,
      id: uniqueId,
      difficulty: this.state.difficulty
    }
    this.props.saveEditedFlashcards(editedCard, uniqueId)
  }

  render() {
    const title = this.props.isNew ? 'Create a Flash Card' : 'Edit Flash Card'
    const defaultQuestion = this.props.isNew ? '' : this.props.flashcard.question
    const defaultAnswer = this.props.isNew ? '' : this.props.flashcard.answer
    const handleSubmit = this.props.isNew ? this.saveCard : this.saveEditedCard
    return (
      <div className="container-fluid w-50 p-4 rounded">
        <form onSubmit={handleSubmit}>
          <h3 className="pb-3">{title}</h3>
          <div className="form-group">
            <label htmlFor="currentQuestion">Question</label>
            <input type="text" className="form-control" name="currentQuestion" placeholder="Enter question" defaultValue={defaultQuestion} />
          </div>
          <div className="form-group">
            <label htmlFor="currentAnswer">Answer</label>
            <input type="text" className="form-control" name="currentAnswer" placeholder="Enter answer" defaultValue={defaultAnswer} />
          </div>
          <h3 className="d-flex justify-content-center" >Choose Difficulty</h3>
          <div className="d-flex justify-content-center p-2">
            <div className="btn-group-sm" role="group" aria-label="Basic example">
              <Difficulty
                difficulty="easy"
                onClick={this.highlight}
                isHighlighted={this.state.difficulty === 'easy'}>
                Easy
              </Difficulty>
              <Difficulty
                difficulty="moderate"
                onClick={this.highlight}
                isHighlighted={this.state.difficulty === 'moderate'}>
                Moderate
              </Difficulty>
              <Difficulty
                difficulty="hard"
                onClick={this.highlight}
                isHighlighted={this.state.difficulty === 'hard'}>
                Hard
              </Difficulty>
            </div>
          </div>
          <div className="d-flex justify-content-center p-2">
            <button type="submit" className="btn btn-dark">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
