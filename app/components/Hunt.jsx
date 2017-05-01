import React from 'react'
import {connect} from 'react-redux'
import strftime from 'strftime'

const Hunt = (props) => {
  console.log(props.hunt)
  return (
    <div>
      <h2 className='hunt-text'>Your trip to {props.hunt.location} on {strftime('%a, %D' , new Date(props.hunt.timestamp))}.</h2>
      <div className='trip-pics'>
        <img className='col-lg-4' src='http://yogaforduckhunters.com/wp-content/uploads/2016/10/hugo_crop.jpg' />
        <img className='col-lg-4' src='https://s-media-cache-ak0.pinimg.com/736x/7f/7d/cf/7f7dcfa01ca12a3e961fe5365c5d7244.jpg' />
        <img className='col-lg-4' src='http://www.sleepwhenyouredead.com/wp-content/uploads/2015/12/IMG_9354_zpslvy8qbky-275x275.jpg' />
      </div>
      <div className='hunt-text'>
        <h4>{props.hunt.description}</h4>
      </div>
      <div className='col-lg-6 fly-route'>
        <img src='https://attachment.outlook.office.net/owa/sarah.herr@hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATYwMAItZDkwZi1lZQEzLTAwAi0wMAoARgAAAyJFeFPmiPlJoD3GcX67zO8HABGzjNhRFHJLpMAESwdb2bIAAAIBDAAAABGzjNhRFHJLpMAESwdb2bIAAXo60m4AAAABEgAQAIL%2BDy0PR3NKjvBKW%2BDPLaw%3D&thumbnailType=2&X-OWA-CANARY=N0mhyxANv0CfcjTZpdX3FkDRQI61kNQYxB6fiRXc1NZdvH5ERFc6KHacnqZ5Fm8yaOZyOMFsB6I.&token=2ee82cce-faa9-4055-8a5b-0004abd3a112&owa=outlook.live.com&isc=1' />
      </div>
      <div className='col-lg-6 fly-stats'>
        <h3>Hunting stats</h3>
        <h4 className='fly-input'>Duration:</h4><p className='fly-input'>5 hours</p>
        <div className='clearfix'/>
        <h4 className='fly-input'>Birds caught:</h4><p className='fly-input'>8 quail</p>
        <div className='clearfix'/>
        <h4 className='fly-input'>No. of dogs:</h4><p className='fly-input'>3 dogs</p>
        <div className='clearfix'/>
        <h4 className='fly-input'>Birds weight at start:</h4><p className='fly-input'>890 gm</p>
        <div className='clearfix'/>
        <h4 className='fly-input'>Temperature:</h4><p className='fly-input'>42 degrees Celcius</p>
        <div className='clearfix'/>
        <h4 className='fly-input'>Wind speeds:</h4><p className='fly-input'>15 mph</p>
        <div className='clearfix'/>
        <h4 className='fly-input'>Humidity:</h4><p className='fly-input'>10%</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    hunt: state.log.hunt
  })
}

export default connect(mapStateToProps, null)(Hunt)
