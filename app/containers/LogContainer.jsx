import { connect } from 'react-redux'
import { addWeight, addFeeding, addHunting, fetchWeight, fetchFeeding, fetchHunting } from '../reducers/log'
import Log from '../components/Log'

const mapStateToProps = state => {
  return ({
    bird: state.bird,
    user: state.auth,
    weights: state.log.weights,
    feedings: state.log.feedings,
    hunts: state.log.hunts
  })
}

const mapDispatchToProps = { addHunting, addWeight, addFeeding, fetchWeight, fetchFeeding, fetchHunting }

export default connect(mapStateToProps, mapDispatchToProps)(Log)
