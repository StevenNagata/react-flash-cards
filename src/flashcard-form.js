import React from 'react'

export default class FlashcardForm extends React.Component {
  constructor(props) {
    super(props)
    this.saveCard = this.saveCard.bind(this)
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

  render() {
    return (
      <div className="container-fluid w-50 p-4 rounded">
        <form onSubmit={this.saveCard}>
          <h3 className="pb-3">Create a Flash Card</h3>
          <div className="form-group">
            <label htmlFor="currentQuestion">Question</label>
            <input type="text" className="form-control" name="currentQuestion" placeholder="Enter question" />
          </div>
          <div className="form-group">
            <label htmlFor="currentAnswer">Answer</label>
            <input type="text" className="form-control" name="currentAnswer" placeholder="Enter answer" />
          </div>
          <div className="d-flex justify-content-center p-2">
            <button type="submit" className="btn btn-dark">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
