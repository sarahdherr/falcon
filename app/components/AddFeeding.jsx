import React from 'react'

export class AddFeeding extends React.Component {
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
    this.props.addFeeding(this.state, this.props.bird.id, this.props.user.id)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Feeding date:</label>
            <input className='normal-input' name='date' type="datetime-local" onChange={this.handleChange} />
          </div>
          <div>
            <label>Food type:</label>
            <input className='normal-input' name='type' onChange={this.handleChange} />
          </div>
          <div>
            <label>Food weight:</label>
            <input className='normal-input' name='weight' onChange={this.handleChange} />
          </div>
          <div>
            <button className='btn'>Add Feeding Entry</button>
          </div>
        </form>
      </div>
    )
  }
}

import { connect } from 'react-redux'
import { addFeeding } from '../reducers/log'

const mapStateToProps = state => {
  return ({
    bird: state.bird,
    user: state.auth
  })
}

const mapDispatchToProps = {addFeeding}

export default connect(mapStateToProps, mapDispatchToProps)(AddFeeding)
