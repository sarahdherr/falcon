import React from 'react'
import LineChart from './LineChart'

export default ({bird = {}, user = {}}) => {
  return (
    <div className='profile-page'>
      <div className='falcon-summary'>
        <div className='falcon-img col-lg-6'>
          <img className='img-styling' src={bird.img} />
        </div>
        <div className='falcon-info col-lg-4'>
          <p><strong>Welcome, {user.name}</strong></p>
          <p><strong>Falcon name:</strong> {bird.name}</p>
          <p><strong>Species:</strong> {bird.species}</p>
          <p><strong>Age:</strong> {bird.age} years</p>
          <p><strong>Ideal flight weight:</strong> {bird.flight_weight} gm</p>
          <p><strong>Latest weight:</strong>  920 gm</p>
          <p><strong>Ideal flight time:</strong>  1/5/2018 at 8:00am</p>
        </div>
      </div>
      <div className='clearfix' />
      <div className='profile-viz col-lg-12'>
        <LineChart />
        <div className='weather'>
          <h3>Weather forcast (New York, NY)</h3>
          <div className='day'>
            <div className='day-info'>
              <h4>Monday, May 1</h4>
              <p>High: 50 degrees C</p>
              <p>Low: 42 degrees C</p>
            </div>
            <div className='day-img'>
              <img src='http://www.weather.gov/images/nws/newicons/ovc.png' />
            </div>
          </div>
          <div className='day'>
            <div className='day-info'>
              <h4>Tuesday, May 2</h4>
              <p>High: 65 degrees C</p>
              <p>Low: 55 degrees C</p>
            </div>
            <div className='day-img'>
              <img src='http://www.weather.gov/images/nws/newicons/bkn.png' />
            </div>
          </div>
          <div className='day'>
            <div className='day-info'>
              <h4>Wednesday, May 3</h4>
              <p>High: 45 degrees C</p>
              <p>Low: 42 degrees C</p>
            </div>
            <div className='day-img'>
              <img src='http://www.weather.gov/images/nws/newicons/shra.png' />
            </div>
          </div>
          <div className='day'>
            <div className='day-info'>
              <h4>Thursday, May 4</h4>
              <p>High: 36 degrees C</p>
              <p>Low: 30 degrees C</p>
            </div>
            <div className='day-img'>
              <img src='http://www.weather.gov/images/nws/newicons/bkn.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
