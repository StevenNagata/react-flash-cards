import React from 'react'
import Navbar from './nav-bar'
import MyFlashcards from './my-flashcards'
import FlashcardForm from './flashcard-form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: '',
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
      <div>
        <Navbar />
        <FlashcardForm saveFlashcard={saveFlashcard} />
        <MyFlashcards flashcards={this.state.flashcards}/>
      </div>
    )
  }
}
