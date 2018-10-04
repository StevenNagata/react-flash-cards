import React from 'react'

export default class EditFlashcards extends React.Component {
  constructor(props) {
    super(props)
    this.saveEditedCard = this.saveEditedCard.bind(this)
  }
  saveEditedCard(event) {
    event.preventDefault()
    const uniqueId = parseInt(this.props.params.uniqueId, 10)
    const editedCard = {
      question: event.target.editedQuestion.value,
      answer: event.target.editedAnswer.value,
      id: uniqueId
    }
    console.log(editedCard)
    const { flashcards } = this.props
    const updatedFlashcards = flashcards.map(card => {
      if (card.id === uniqueId) {
        return editedCard
      }
      else {
        return card
      }
    })
    this.props.saveEditedFlashcards(updatedFlashcards)
  }
  render() {
    const { flashcards, params } = this.props
    const currentEditFlashcard = flashcards.find(card => card.id === parseInt(params.uniqueId, 10))
    console.log(currentEditFlashcard)
    return (
      <div className="container-fluid w-50 p-4 rounded">
        <form onSubmit={this.saveEditedCard}>
          <h3 className="pb-3">Edit Flash Card</h3>
          <div className="form-group">
            <label htmlFor="currentQuestion">Question</label>
            <input type="text" className="form-control" name="editedQuestion" defaultValue={currentEditFlashcard.question} />
          </div>
          <div className="form-group">
            <label htmlFor="currentAnswer">Answer</label>
            <input type="text" className="form-control" name="editedAnswer" defaultValue={currentEditFlashcard.answer} />
          </div>
          <div className="d-flex justify-content-center p-2">
            <button type="submit" className="btn btn-dark">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
