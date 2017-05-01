import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      showAddWeight: false,
      showAddFeeding: false,
      showAddHunting: false
    }

    this.showWeightForm = this.showWeightForm.bind(this)
    this.showFeedingForm = this.showFeedingForm.bind(this)
    this.showHuntingForm = this.showHuntingForm.bind(this)

    this.handleWeightChange = this.handleWeightChange.bind(this)
    this.handleWeightSubmit = this.handleWeightSubmit.bind(this)
    this.handleFeedingChange = this.handleFeedingChange.bind(this)
    this.handleFeedingSubmit = this.handleFeedingSubmit.bind(this)
    this.handleHuntingChange = this.handleHuntingChange.bind(this)
    this.handleHuntingSubmit = this.handleHuntingSubmit.bind(this)
  }

  showWeightForm(evt) {
    evt.preventDefault()
    this.setState({
      showAddWeight: !this.state.showAddWeight
    })
  }

  showFeedingForm(evt) {
    evt.preventDefault()
    this.setState({
      showAddFeeding: !this.state.showAddFeeding
    })
  }

  showHuntingForm(evt) {
    evt.preventDefault()
    this.setState({
      showAddHunting: !this.state.showAddHunting
    })
  }

  handleWeightChange(evt) {
    evt.preventDefault()
    this.setState({
      weight: {
        ...this.state.weight,
        [evt.target.name]: evt.target.value
      }
    })
  }

  handleWeightSubmit(evt) {
    evt.preventDefault()
    this.props.addWeight(this.state.weight, this.props.bird.id, this.props.user.id)
    this.setState({
      showAddWeight: false
    })
    this.props.fetchWeight(this.props.user.id)
  }

  handleFeedingChange(evt) {
    evt.preventDefault()
    this.setState({
      feeding: {
        ...this.state.feeding,
        [evt.target.name]: evt.target.value
      }
    })
  }

  handleFeedingSubmit(evt) {
    evt.preventDefault()
    this.props.addFeeding(this.state.feeding, this.props.bird.id, this.props.user.id)
    this.setState({
      showAddFeeding: false
    })
  }

  handleHuntingChange(evt) {
    evt.preventDefault()
    this.setState({
      hunting: {
        ...this.state.hunting,
        [evt.target.name]: evt.target.value
      }
    })
  }

  handleHuntingSubmit(evt) {
    evt.preventDefault()
    this.props.addHunting(this.state.hunting, this.props.bird.id, this.props.user.id)
    this.setState({
      showAddHunting: false
    })
  }

  render() {
    return (
      <div>
      <div className='col-lg-2 spacing'></div>
      <div className='log-page col-lg-8'>
        <div className='weight log'>
          <div className='new-line'>
            <h3 className='log-title'>Weight</h3>
            <button onClick={this.showWeightForm} className='add-button btn'>
            {
              this.state.showAddWeight ? 'x' : '+'
            }
            </button>
          </div>
          {
            this.state.showAddWeight ? (
              <div className='signup-page'>
                <form onSubmit={this.handleWeightSubmit}>
                  <div>
                    <label>Weighing date:</label>
                    <input className='normal-input' name='timestamp' onChange={this.handleWeightChange} type="datetime-local" />
                  </div>
                  <div>
                    <label>Current weight:</label>
                    <input className='normal-input' name='current' onChange={this.handleWeightChange} />
                  </div>
                  <div>
                    <label>Next flight date:</label>
                    <input className='normal-input' name='next_flight' onChange={this.handleWeightChange} type="datetime-local" />
                  </div>
                  <div>
                    <button className='btn'>Add Weight Entry</button>
                  </div>
                </form>
              </div>
              ) : (
            <table className='table table-bordered log-table'>
              <thead>
                <tr>
                  <th>Weighing date</th>
                  <th>Next flight date</th>
                  <th>Current weight</th>
                  <th>Ideal flight weight</th>
                </tr>
              </thead>
              <tbody>
              {
                this.props.weights.map(weight =>
                  <tr key={weight.id}>
                    <td>{weight.timestamp}</td>
                    <td>{weight.next_flight}</td>
                    <td>{weight.current} gm</td>
                    <td>{this.props.bird.flight_weight} gm</td>
                  </tr>
                )
              }
              </tbody>
            </table>)
          }
        </div>

        <div className='feeding log'>
          <div className='new-line'>
            <h3 className='log-title'>Feeding</h3>
            <button onClick={this.showFeedingForm} className='add-button btn'>
            {
              this.state.showAddFeeding ? 'x' : '+'
            }
            </button>
          </div>
          {
            this.state.showAddFeeding ? (
              <div className='signup-page'>
                <form onSubmit={this.handleFeedingSubmit}>
                  <div>
                    <label>Feeding date:</label>
                    <input className='normal-input' name='date' type="datetime-local" onChange={this.handleFeedingChange} />
                  </div>
                  <div>
                    <label>Food type:</label>
                    <input className='normal-input' name='type' onChange={this.handleFeedingChange} />
                  </div>
                  <div>
                    <label>Food weight:</label>
                    <input className='normal-input' name='weight' onChange={this.handleFeedingChange} />
                  </div>
                  <div>
                    <button className='btn'>Add Feeding Entry</button>
                  </div>
                </form>
              </div>
              ) : (
          <table className='table table-bordered log-table'>
          <thead>
            <tr>
              <th>Feeding date</th>
              <th>Food type</th>
              <th>Food weight</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.feedings.map(feeding =>
                <tr key={feeding.id}>
                  <td>{feeding.timestamp}</td>
                  <td>{feeding.type}</td>
                  <td>{feeding.weight} gm</td>
                </tr>
              )
            }
          </tbody>
          </table>)
          }
        </div>

          <div className='hunting log'>

          <div className='new-line'>
            <h3 className='log-title'>Hunting</h3>
            <button onClick={this.showHuntingForm} className='add-button btn'>
            {
              this.state.showAddHunting ? 'x' : '+'
            }
            </button>
          </div>
          {
            this.state.showAddHunting ? (
              <div className='signup-page'>
                <form onSubmit={this.handleHuntingSubmit}>
                  <div>
                    <label>Hunting date:</label>
                    <input className='normal-input' name='date' type="datetime-local" onChange={this.handleHuntingChange} />
                  </div>
                  <div>
                    <label>Overall rating:</label>
                    <input className='normal-input' name='rating' onChange={this.handleHuntingChange} />
                  </div>
                  <div>
                    <label>Location:</label>
                    <input className='normal-input' name='location' onChange={this.handleHuntingChange} />
                  </div>
                  <div>
                    <label>Description:</label>
                    <input className='normal-input desc-input' name='description' onChange={this.handleHuntingChange} />
                  </div>
                  <div>
                    <button className='btn'>Add Hunting Entry</button>
                  </div>
                </form>
              </div>
              ) : (
              <table className='table table-bordered log-table'>
                <thead>
                <tr>
                  <th>Hunting date</th>
                  <th>Overall rating</th>
                  <th>Location</th>
                  <th>Hunting description</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.hunts.map(hunt =>
                    <tr key={hunt.id}>
                      <td><Link to={`/hunt/${hunt.id}`}>{hunt.timestamp}</Link></td>
                      <td>{hunt.rating}</td>
                      <td>{hunt.location}</td>
                      <td>{hunt.description}</td>
                    </tr>
                  )
                }
                </tbody>
              </table>)
              }
          </div>
        </div>
      </div>
    )
  }
}
