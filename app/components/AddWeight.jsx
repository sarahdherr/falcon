import React from 'react'

export class AddWeight extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log(this.props)
    // console.log('HANDLE SUBMIT', this.state, this.props.bird)
    this.props.addWeight(this.state, this.props.bird.id, this.props.user.id)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Weighing date:</label>
            <input className='normal-input' name='timestamp' onChange={this.handleChange} type="datetime-local" />
          </div>
          <div>
            <label>Current weight:</label>
            <input className='normal-input' name='current' onChange={this.handleChange} />
          </div>
          <div>
            <label>Next flight date:</label>
            <input className='normal-input' name='next_flight' onChange={this.handleChange} type="datetime-local" />
          </div>
          <div>
            <button className='btn'>Add Weight Entry</button>
          </div>
        </form>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { addWeight } from '../reducers/log'

const mapStateToProps = state => {
  return ({
    bird: state.bird,
    user: state.auth
  })
}

const mapDispatchToProps = {addWeight}

export default connect(mapStateToProps, mapDispatchToProps)(AddWeight)
