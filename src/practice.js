import React from 'react'

const style = {
  arrowleft: {
    color: 'black',
    position: 'absolute',
    top: '35%',
    left: '10%'
  },
  arrowright: {
    color: 'black',
    position: 'absolute',
    top: '35%',
    right: '10%'
  },
  outof: {
    color: 'black',
    top: '5%',
    left: '15%'
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
      showAnswer: showAnswer || false,
      progress: Math.round((1 / this.props.flashcards.length + (currentCardIndex / (this.props.flashcards.length))) * 100)
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
    if (this.state.currentCardIndex !== 0) {
      this.setState({
        currentCardIndex: this.state.currentCardIndex - 1,
        showAnswer: false,
        progress: Math.round((1 / this.props.flashcards.length + ((this.state.currentCardIndex - 1) / (this.props.flashcards.length))) * 100)
      })
    }
  }
  nextCard() {
    if (this.state.currentCardIndex !== (this.props.flashcards.length - 1)) {
      this.setState({
        currentCardIndex: this.state.currentCardIndex + 1,
        showAnswer: false,
        progress: Math.round((1 / this.props.flashcards.length + ((this.state.currentCardIndex + 1) / (this.props.flashcards.length))) * 100)
      })
    }
  }
  toggleAnswer() {
    this.setState({ showAnswer: !this.state.showAnswer })
  }
  render() {
    const barstyle = {
      barprogress: {
        width: this.state.progress + '%'
      },
      barback: {
        border: 'solid black',
        'borderRadius': '10px / 5px'
      }
    }
    const { flashcards } = this.props
    const { currentCardIndex, showAnswer } = this.state
    const anwserDisplay = showAnswer ? 'm-2 text-success' : 'd-none'
    const anwserButton = showAnswer ? 'Hide Answer' : 'Show Answer'
    if (this.props.flashcards.length === 0) {
      return <div>You have no cards at this difficulty</div>
    }
    else {
      return (
        <div>
          <div className="container w-75">
            <div className="progress-sm m-3" style={barstyle.barback}>
              <div className=" text-dark progress-bar progress-bar-striped bg-success progress-bar-animated"
                role="progressbar"
                style={barstyle.barprogress}>{this.state.progress}%</div>
            </div>
          </div>
          <div className="d-flex justify-content-center position-relative">
            <a onClick={this.previousCard} className="btn btn-dark text-secondary" style={style.arrowleft}>&#10094;&#10094;</a>
            <div className="jumbotron w-75">
              <a className="position-absolute" style={style.outof}>{this.state.currentCardIndex + 1} / {this.props.flashcards.length}</a>

              <div className="btn-group-sm float-right" role="group" aria-label="Basic example">
                <div>{this.props.flashcards[this.state.currentCardIndex].difficulty}</div>
              </div>

              <p>{flashcards[currentCardIndex].question}</p>
              <a onClick={this.toggleAnswer} className="m-2 btn btn-dark btn-sm text-secondary" role="button">{anwserButton}</a>
              <p className={anwserDisplay}>{flashcards[currentCardIndex].answer}</p>
            </div>
            <a onClick={this.nextCard} className="btn btn-dark text-secondary" style={style.arrowright}>&#10095;&#10095;</a>
          </div>
        </div>
      )
    }
  }
}
