import React from 'react'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    const stateJson = localStorage.getItem('current-carousel-state')
    const carouselState = JSON.parse(stateJson) || {}
    const currentCardIndex = carouselState.currentCardIndex
    const showAnswer = carouselState.showAnswer
    this.state = {
      currentCardIndex: currentCardIndex || 0,
      showAnswer: showAnswer || false
    }
    this.toggleAnswer = this.toggleAnswer.bind(this)
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      const { currentCardIndex, showAnswer } = this.state
      const stateJson = JSON.stringify({ currentCardIndex, showAnswer })
      localStorage.setItem('current-carousel-state', stateJson)
    })
  }
  toggleAnswer() {
    this.setState({ showAnswer: !this.state.showAnswer })
  }
  render() {
    const { flashcards } = this.props
    const { currentCardIndex, showAnswer } = this.state
    const anwserDisplay = showAnswer ? '' : 'd-none'
    const anwserButton = showAnswer ? 'Hide Answer' : 'Show Answer'
    return (
      <div className="d-flex justify-content-center">
        <div className="jumbotron w-75">
          <p>{flashcards[currentCardIndex].question}</p>
          <a onClick={this.toggleAnswer} className="m-2 btn btn-primary btn-sm" role="button">{anwserButton}</a>
          <p className={anwserDisplay}>{flashcards[currentCardIndex].answer}</p>
        </div>
      </div>
    )
  }
}
