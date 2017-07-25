import {connect} from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = state => {
  return ({
    bird: state.bird,
    user: state.auth,
    weights: state.log.weights
  })
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
