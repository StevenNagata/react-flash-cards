import React from 'react'
import FlashcardForm from './flashcard-form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: []
    }
    this.saveFlashcard = this.saveFlashcard.bind(this)
  }

  saveFlashcard(event) {
    event.preventDefault()
    const newCard = {
      question: event.target.currentQuestion.value,
      answer: event.target.currentAnswer.value
    }
    const flashcards = this.state.flashcards.map((card) =>
      Object.assign({}, card)
    )
    flashcards.push(newCard)
    this.setState({ flashcards })
    event.target.reset()
  }

  render() {
    const { saveFlashcard } = this
    return (
      <FlashcardForm saveFlashcard={saveFlashcard} />
    )
  }
}
