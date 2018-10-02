import React from 'react'

export default class FlashcardForm extends React.Component {

  render() {
    return (
      <div className="container-fluid w-50 border border-dark p-4 rounded">
        <form>
          <h3 className="pb-3">Create a Flash Card</h3>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Question</label>
            <input type="text" className="form-control" id="currentQuestion" placeholder="Enter question" />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Answer</label>
            <input type="text" className="form-control" id="currentAnwser" placeholder="Enter answer" />
          </div>
        </form>
        <div className="d-flex justify-content-center p-2">
          <button type="button" className="btn btn-outline-dark">Save</button>
        </div>
      </div>
    )
  }
}
