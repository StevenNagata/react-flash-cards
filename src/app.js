import React from 'react'
import Navbar from './nav-bar'
import hash from './hash'
import MyFlashcards from './my-flashcards'
import FlashcardForm from './flashcard-form'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const path = hash.parse(location.hash).path
    this.state = {
      view: { path },
      flashcards: []
    }
    this.saveFlashcard = this.saveFlashcard.bind(this)
    this.takeToForm = this.takeToForm.bind(this)
  }
  takeToForm() {
    this.setState({
      view: { path: 'create' }
    })
  }
  renderView() {
    const { path } = this.state.view
    switch (path) {
      case 'create':
        return <FlashcardForm saveFlashcard={this.saveFlashcard} />
      default:
        return <MyFlashcards flashcards={this.state.flashcards} takeToForm={this.takeToForm} />
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path } = hash.parse(location.hash)
      this.setState({
        view: { path }
      })
    })
    window.addEventListener('beforeunload', () => {
      const { view, flashcards } = this.state
      const stateJson = JSON.stringify({ view, flashcards })
      localStorage.setItem('current-app-state', stateJson)
    })
  }
  saveFlashcard(newCard) {
    const flashcards = this.state.flashcards.slice()
    flashcards.push(newCard)
    this.setState({ flashcards })
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.renderView()}
      </div>
    )
  }
}
