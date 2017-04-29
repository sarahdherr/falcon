import React from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = 'fq1rxfrr'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dpaa0igrr/upload'

export class FalconSignup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      uploadedFileCloudinaryUrl: ''
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })

    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file)

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
      }
    })
  }

  render() {
    return (
      <div>
      <h2 className='signup-dir'>Add Bird Information</h2>
      <form onSubmit={ evt => {
        evt.preventDefault()
        const falcon = {
          name: evt.target.name.value,
          species: evt.target.species.value,
          age: evt.target.age.value,
          flight_weight: evt.target.weight.value,
          weight_loss: evt.target.loss.value,
          img: this.state.uploadedFileCloudinaryUrl
        }
        console.log('Bird inforamtion: ', falcon, this.props.user.id)
        this.props.birdSignup(falcon, this.props.user.id)
      } }>
        <p className='signup-dir'>Please provide bird's information, as accurate as possible.</p>
        <div className='clearfix'></div>
        <div className='falcon-upload col-lg-3'>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>
        <div className='falcon-signup col-lg-5'>
          <div>
            <label>Name:</label>
            <input className='normal-input' name='name' />
          </div>
          <div>
            <label>Species:</label>
            <input className='normal-input' name='species' />
          </div>
          <div>
            <label>Age:</label>
            <input className='normal-input' name='age' />
          </div>
          <div>
            <label>Ideal flight weight:</label>
            <input className='normal-input' name='weight' />
          </div>
          <div>
            <label>Average grams lost per hour:</label>
            <input className='normal-input' name='loss' />
          </div>
          <div>
            <button type='submit'>Sign up</button>
          </div>
        </div>
      </form>
    </div>
    )
  }
}

import {birdSignup} from 'APP/app/reducers/bird'
import {connect} from 'react-redux'

export default connect(
  state => ({
    user: state.auth
  }),
  {birdSignup},
)(FalconSignup)
