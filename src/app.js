import React from 'react'
import Navbar from './nav-bar'
import hash from './hash'
import MyFlashcards from './my-flashcards'
import FlashcardForm from './flashcard-form'
import EditFlashcard from './edit-flashcard'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const stateJson = localStorage.getItem('current-app-state')
    const appState = JSON.parse(stateJson) || {}
    const path = hash.parse(location.hash).path
    this.state = {
      view: { path },
      flashcards: appState.flashcards || []
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
      case 'edit':
        return <EditFlashcard flashcards={this.state.flashcards} />
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
      const { flashcards } = this.state
      const stateJson = JSON.stringify({ flashcards })
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
