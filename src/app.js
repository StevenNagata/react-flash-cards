import React from 'react'
import Navbar from './nav-bar'
import hash from './hash'
import MyFlashcards from './my-flashcards'
import FlashcardForm from './flashcard-form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {},
      flashcards: []
    }
    this.saveFlashcard = this.saveFlashcard.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: { path }
      })
    })
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
        <MyFlashcards flashcards={this.state.flashcards} />
      </div>
    )
  }
}
