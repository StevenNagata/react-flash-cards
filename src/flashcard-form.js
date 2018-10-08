import React from 'react'

export default class FlashcardForm extends React.Component {
  constructor(props) {
    super(props)
    this.saveCard = this.saveCard.bind(this)
    this.saveEditedCard = this.saveEditedCard.bind(this)
  }
  saveCard(event) {
    event.preventDefault()
    const { uniqueId } = this.props
    const newCard = {
      question: event.target.currentQuestion.value,
      answer: event.target.currentAnswer.value,
      id: uniqueId
    }
    event.target.reset()
    this.props.saveFlashcard(newCard)
  }
  saveEditedCard(event) {
    event.preventDefault()
    const uniqueId = parseInt(this.props.flashcard.id, 10)
    const editedCard = {
      question: event.target.currentQuestion.value,
      answer: event.target.currentAnswer.value,
      id: uniqueId
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
          <div className="d-flex justify-content-center p-2">
            <button type="submit" className="btn btn-dark">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
