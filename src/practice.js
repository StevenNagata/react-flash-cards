import React from 'react'

const style = {
  arrowleft: {
    color: 'black',
    position: 'absolute',
    top: '35%',
    left: '20%'
  },
  arrowright: {
    color: 'black',
    position: 'absolute',
    top: '35%',
    right: '20%'
  },
  outof: {
    color: 'black',
    top: '5%',
    left: '27%'
  }
}
export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    const stateJson = localStorage.getItem('current-carousel-state')
    const carouselState = JSON.parse(stateJson) || {}
    const currentCardIndex = carouselState.currentCardIndex
    this.state = {
      flashcards: this.props.flashcards,
      currentCardIndex: 0,
      showAnswer: false,
      difficulty: 'all',
      progress: Math.round((1 / this.props.flashcards.length + (currentCardIndex / (this.props.flashcards.length))) * 100)
    }
    this.toggleAnswer = this.toggleAnswer.bind(this)
    this.previousCard = this.previousCard.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.highlightAndFilter = this.highlightAndFilter.bind(this)
  }
  highlightAndFilter(event) {
    if (event.target.name === 'easy') {
      const flashcards = this.props.flashcards.filter(card => card.difficulty === 'easy')
      this.setState({
        flashcards: flashcards,
        difficulty: 'easy',
        showAnswer: false,
        currentCardIndex: 0,
        progress: Math.round((1 / flashcards.length) * 100)
      })
    }
    else if (event.target.name === 'moderate') {
      const flashcards = this.props.flashcards.filter(card => card.difficulty === 'moderate')
      this.setState({
        flashcards: flashcards,
        difficulty: 'moderate',
        showAnswer: false,
        currentCardIndex: 0,
        progress: Math.round((1 / flashcards.length) * 100)
      })
    }
    else if (event.target.name === 'hard') {
      const flashcards = this.props.flashcards.filter(card => card.difficulty === 'hard')
      this.setState({
        flashcards: flashcards,
        difficulty: 'hard',
        showAnswer: false,
        currentCardIndex: 0,
        progress: Math.round((1 / flashcards.length) * 100)
      })
    }
    else {
      this.setState({
        flashcards: this.props.flashcards,
        difficulty: 'all',
        showAnswer: false,
        currentCardIndex: 0,
        progress: Math.round((1 / this.props.flashcards.length) * 100)
      })
    }
  }
  previousCard() {
    if (this.state.currentCardIndex !== 0) {
      this.setState({
        currentCardIndex: this.state.currentCardIndex - 1,
        showAnswer: false,
        progress: Math.round((1 / this.state.flashcards.length + ((this.state.currentCardIndex - 1) / (this.state.flashcards.length))) * 100)
      })
    }
  }
  nextCard() {
    if (this.state.currentCardIndex !== (this.state.flashcards.length - 1)) {
      this.setState({
        currentCardIndex: this.state.currentCardIndex + 1,
        showAnswer: false,
        progress: Math.round((1 / this.state.flashcards.length + ((this.state.currentCardIndex + 1) / (this.state.flashcards.length))) * 100)
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
    const { currentCardIndex, showAnswer, flashcards } = this.state
    const anwserDisplay = showAnswer ? 'm-2 text-dark' : 'd-none'
    const anwserButton = showAnswer ? 'Hide Answer' : 'Show Answer'
    if (this.props.flashcards.length === 0) {
      return <div>You have no cards at this difficulty</div>
    }
    else {
      const classEasy = (this.state.difficulty === 'easy') ? 'btn btn-secondary text-success bg-dark' : 'btn btn-secondary text-dark'
      const classModerate = (this.state.difficulty === 'moderate') ? 'btn btn-secondary text-warning bg-dark' : 'btn btn-secondary text-dark'
      const classHard = (this.state.difficulty === 'hard') ? 'btn btn-secondary text-danger bg-dark' : 'btn btn-secondary text-dark'
      const classAll = (this.state.difficulty === 'all') ? 'btn btn-secondary text-secondary bg-dark' : 'btn btn-secondary text-dark'
      return (
        <div>
          <h3 className="d-flex justify-content-center" >Practice Difficulty</h3>
          <div className="d-flex justify-content-center p-2">
            <div className="btn-group-sm" role="group" aria-label="Basic example">
              <button onClick={this.highlightAndFilter} type="button" name="easy" className={classEasy}>Easy</button>
              <button onClick={this.highlightAndFilter} type="button" name="moderate" className={classModerate}>Moderate</button>
              <button onClick={this.highlightAndFilter} type="button" name="hard" className={classHard}>Hard</button>
              <button onClick={this.highlightAndFilter} type="button" name="all" className={classAll}>All</button>
            </div>
          </div>

          <div className="container w-50">
            <div className="progress-sm m-3" style={barstyle.barback}>
              <div className=" text-secondary progress-bar progress-bar-striped bg-dark progress-bar-animated"
                role="progressbar"
                style={barstyle.barprogress}>{this.state.progress}%</div>
            </div>
          </div>
          <div className="d-flex justify-content-center position-relative">
            <a onClick={this.previousCard} className="btn btn-dark btn-sm text-secondary" style={style.arrowleft}>&#10094;&#10094;</a>
            <div className="jumbotron w-50">
              <a className="position-absolute" style={style.outof}>{this.state.currentCardIndex + 1} / {this.state.flashcards.length}</a>
              <p>{flashcards[currentCardIndex].question}</p>
              <a onClick={this.toggleAnswer} className="m-2 btn btn-dark btn-sm text-secondary" role="button">{anwserButton}</a>
              <p className={anwserDisplay}>{flashcards[currentCardIndex].answer}</p>
            </div>
            <a onClick={this.nextCard} className="btn btn-dark btn-sm text-secondary" style={style.arrowright}>&#10095;&#10095;</a>
          </div>
        </div>
      )
    }
  }
}
