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
    const params = hash.parse(location.hash).params
    this.state = {
      view: {
        path: path,
        params: params
      },
      flashcards: appState.flashcards || []
    }
    this.saveFlashcard = this.saveFlashcard.bind(this)
    this.takeToForm = this.takeToForm.bind(this)
    this.saveEditedFlashcards = this.saveEditedFlashcards.bind(this)
  }
  saveEditedFlashcards(flashcards) {
    this.setState({
      flashcards,
      view: { path: 'view' }
    })
  }
  takeToForm() {
    this.setState({
      view: { path: 'create' }
    })
  }
  renderView() {
    const { path, params } = this.state.view
    switch (path) {
      case 'create':
        return <FlashcardForm saveFlashcard={this.saveFlashcard} />
      case 'edit':
        return <EditFlashcard flashcards={this.state.flashcards} saveEditedFlashcards={this.saveEditedFlashcards} params={params} />
      default:
        return <MyFlashcards flashcards={this.state.flashcards} takeToForm={this.takeToForm} editCard={this.editCard} />
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = hash.parse(location.hash)
      this.setState({
        view: { path, params }
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
