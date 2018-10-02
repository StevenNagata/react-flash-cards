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

  saveFlashcard(question, answer) {
    const flashcards = this.state.flashcards.map((card) =>
      Object.assign({}, card)
    )
    const newCard = { question, answer }
    flashcards.push(newCard)
    this.setState({ flashcards })
  }

  render() {
    const { saveFlashcard } = this
    return (
      <FlashcardForm saveFlashcard={saveFlashcard} />
    )
  }
}
