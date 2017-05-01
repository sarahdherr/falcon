import React from 'react'
import LineChart from './LineChart'

export default ({bird = {}, user = {}}) => {
  return (
    <div className='profile-page'>
      <div className='falcon-summary'>
        <div className='falcon-img col-lg-7'>
          <img className='img-styling' src={bird.img} />
        </div>
        <div className='falcon-info col-lg-4'>
          <p><strong>Welcome, {user.name}</strong></p>
          <p><strong>Falcon name:</strong> {bird.name}</p>
          <p><strong>Species:</strong> {bird.species}</p>
          <p><strong>Age:</strong> {bird.age}</p>
          <p><strong>Ideal flight weight:</strong> {bird.flight_weight}</p>
          <p><strong>Latest weight:</strong>  920 gm</p>
          <p><strong>Ideal flight time:</strong>  1/5/2018 at 8:00am</p>
        </div>
      </div>
      <div className='clearfix' />
      <div className='profile-viz col-lg-12'>
        <LineChart />
      </div>
    </div>
  )
}
