import React from 'react'
import FlashcardForm from './flashcard-form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: []
    }
  }

  render() {
    return (
      <FlashcardForm />
    )
  }
}
