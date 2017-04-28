import React from 'react'

export default (props) => {
  return (
    <div className='profile-page'>
      <div className='falcon-summary'>
        <div className='falcon-img col-lg-7'>
          <img className='img-styling' src='http://www.kansas.com/news/hw4yvz/picture44540784/ALTERNATES/FREE_960/111215falcons_br12' />
        </div>
        <div className='falcon-info col-lg-4'>
          <h2>Profile information:</h2>
          <h4><strong>Name:</strong>  Jeff Herr</h4>
          <h4><strong>Falcon name:</strong>  Big Mama</h4>
          <h4><strong>Species:</strong>  Peregrine</h4>
          <h4><strong>Age:</strong>  4 years</h4>
          <h4><strong>Ideal flight weight:</strong>  850 gm</h4>
          <h4><strong>Latest weight:</strong>  920 gm</h4>
          <h4><strong>Ideal flight time:</strong>  1/5/2018 at 8:00am</h4>
        </div>
      </div>
      <div className='clearfix' />
      <div className='profile-viz col-lg-12'>
        <h2>Real D3 chart to come...</h2>
        <img className='img-styling' src='https://www.dyclassroom.com/image/topic/chartjs/linegraph.png' />
      </div>
    </div>
  )
}