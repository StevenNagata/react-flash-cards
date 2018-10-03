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

  saveFlashcard(newCard) {
    const flashcards = this.state.flashcards.slice()
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
