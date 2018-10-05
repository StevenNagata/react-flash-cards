import React from 'react'

const style = {
  arrowleft: {
    color: 'black',
    position: 'absolute',
    top: '45%',
    left: '10%'
  },
  arrowright: {
    color: 'black',
    position: 'absolute',
    top: '45%',
    right: '10%'
  }
}
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
    this.previousCard = this.previousCard.bind(this)
    this.nextCard = this.nextCard.bind(this)
  }
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      const { currentCardIndex, showAnswer } = this.state
      const stateJson = JSON.stringify({ currentCardIndex, showAnswer })
      localStorage.setItem('current-carousel-state', stateJson)
    })
  }
  previousCard() {
    const previousIndex = (this.state.currentCardIndex === 0) ? this.props.flashcards.length - 1 : this.state.currentCardIndex - 1
    this.setState({
      currentCardIndex: previousIndex,
      showAnswer: false
    })
  }
  nextCard() {
    const nextIndex = (this.state.currentCardIndex === (this.props.flashcards.length - 1)) ? 0 : this.state.currentCardIndex + 1
    this.setState({
      currentCardIndex: nextIndex,
      showAnswer: false
    })
  }
  toggleAnswer() {
    this.setState({ showAnswer: !this.state.showAnswer })
  }
  render() {
    const { flashcards } = this.props
    const { currentCardIndex, showAnswer } = this.state
    const anwserDisplay = showAnswer ? 'm-2' : 'd-none'
    const anwserButton = showAnswer ? 'Hide Answer' : 'Show Answer'
    return (
      <div>
        <div className="container">
          <div className="col align-self-center">
            <div className="progress w-75 m-3">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center position-relative">
          <a onClick={this.previousCard} href="#practice" style={style.arrowleft}>&#10094;&#10094;</a>
          <div className="jumbotron w-75">
            <p>{flashcards[currentCardIndex].question}</p>
            <a onClick={this.toggleAnswer} className="m-2 btn btn-dark btn-sm text-secondary" role="button">{anwserButton}</a>
            <p className={anwserDisplay}>{flashcards[currentCardIndex].answer}</p>
          </div>
          <a onClick={this.nextCard} href="#practice" style={style.arrowright}>&#10095;&#10095;</a>
        </div>
      </div>
    )
  }
}
