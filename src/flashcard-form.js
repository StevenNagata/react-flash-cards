import React from 'react'

export default class FlashcardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEasy: false,
      isModerate: false,
      isHard: false,
      difficulty: 'none'
    }
    this.saveCard = this.saveCard.bind(this)
    this.saveEditedCard = this.saveEditedCard.bind(this)
    this.highlight = this.highlight.bind(this)
  }
  componentDidMount() {
    if (!this.props.isNew) {
      if (this.props.flashcard.difficulty === 'easy') {
        this.setState({
          isEasy: true,
          isModerate: false,
          isHard: false,
          difficulty: 'easy'
        })
      }
      else if (this.props.flashcard.difficulty === 'moderate') {
        this.setState({
          isEasy: false,
          isModerate: true,
          isHard: false,
          difficulty: 'moderate'
        })
      }
      else if (this.props.flashcard.difficulty === 'hard') {
        this.setState({
          isEasy: false,
          isModerate: false,
          isHard: true,
          difficulty: 'hard'
        })
      }
      else {
        this.setState({
          isEasy: false,
          isModerate: false,
          isHard: false,
          difficulty: 'none'
        })
      }
    }
  }
  highlight(event) {
    if (event.target.name === 'easy') {
      this.setState({
        isEasy: true,
        isModerate: false,
        isHard: false,
        difficulty: 'easy'
      })
    }
    else if (event.target.name === 'moderate') {
      this.setState({
        isEasy: false,
        isModerate: true,
        isHard: false,
        difficulty: 'moderate'
      })
    }
    else {
      this.setState({
        isEasy: false,
        isModerate: false,
        isHard: true,
        difficulty: 'hard'
      })
    }
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
    const { isEasy, isModerate, isHard } = this.state
    const title = this.props.isNew ? 'Create a Flash Card' : 'Edit Flash Card'
    const defaultQuestion = this.props.isNew ? '' : this.props.flashcard.question
    const defaultAnswer = this.props.isNew ? '' : this.props.flashcard.answer
    const handleSubmit = this.props.isNew ? this.saveCard : this.saveEditedCard
    const classEasy = isEasy ? 'btn btn-secondary text-secondary bg-dark' : 'btn btn-secondary text-dark'
    const classModerate = isModerate ? 'btn btn-secondary text-secondary bg-dark' : 'btn btn-secondary text-dark'
    const classHard = isHard ? 'btn btn-secondary text-secondary bg-dark' : 'btn btn-secondary text-dark'
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
              <button onClick={this.highlight} type="button" name="easy" className={classEasy}>Easy</button>
              <button onClick={this.highlight} type="button" name="moderate" className={classModerate}>Moderate</button>
              <button onClick={this.highlight} type="button" name="hard" className={classHard}>Hard</button>
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
