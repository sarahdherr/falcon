import React from 'react'

export class AddHunting extends React.Component {
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
    this.props.addHunting(this.state, this.props.bird.id, this.props.user.id)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Hunting date:</label>
            <input className='normal-input' name='date' type="datetime-local" onChange={this.handleChange} />
          </div>
          <div>
            <label>Overall rating:</label>
            <input className='normal-input' name='rating' onChange={this.handleChange} />
          </div>
          <div>
            <label>Location:</label>
            <input className='normal-input' name='location' onChange={this.handleChange} />
          </div>
          <div>
            <label>Description:</label>
            <input className='normal-input' name='description' onChange={this.handleChange} />
          </div>
          <div>
            <button className='btn'>Add Hunting Entry</button>
          </div>
        </form>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { addHunting } from '../reducers/log'

const mapStateToProps = state => {
  return ({
    bird: state.bird,
    user: state.auth
  })
}

const mapDispatchToProps = {addHunting}

export default connect(mapStateToProps, mapDispatchToProps)(AddHunting)
