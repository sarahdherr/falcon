import React from 'react'

export default (props) => {
  return (
    <div>
    <div className='col-lg-2 spacing'></div>
    <div className='log-page col-lg-8'>
      <h2 className='page-title'>Your log</h2>
      <div className='weight log'>
        <h3>Weight</h3>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Weighing date</th>
              <th>Next flight date</th>
              <th>Current weight</th>
              <th>Ideal flight weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1/1/18 8:00pm</td>
              <td>1/2/18 9:00am</td>
              <td>920 gm</td>
              <td>850 gm</td>
            </tr>
            <tr>
              <td>1/3/18 10:00am</td>
              <td>1/6/18 7:00am</td>
              <td>790 gm</td>
              <td>850 gm</td>
            </tr>
            <tr>
              <td>1/3/18 4:00pm</td>
              <td>1/6/18 7:00am</td>
              <td>915 gm</td>
              <td>850 gm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='feeding log'>
        <h3>Feeding</h3>
        <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Feeding date</th>
            <th>Food type</th>
            <th>Food weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/1/18 5:00pm</td>
            <td>Pigeon</td>
            <td>150 gm</td>
          </tr>
          <tr>
            <td>1/2/18 3:00pm</td>
            <td>Quail</td>
            <td>190 gm</td>
          </tr>
          <tr>
            <td>1/3/18 8:00am</td>
            <td>Pigeon</td>
            <td>145 gm</td>
          </tr>
        </tbody>
        </table>
      </div>

        <div className='hunting log'>
        <h3>Hunting</h3>
        <table className='table table-bordered'>
          <thead>
          <tr>
            <th>Hunting date</th>
            <th>Overall rating</th>
            <th>Location</th>
            <th>Hunting description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>12/31/17 7:00pm</td>
            <td>7</td>
            <td>Great lake</td>
            <td>Moderately successful. Lots of mud but high number of targets.</td>
          </tr>
          <tr>
            <td>1/2/18 9:00am</td>
            <td>9</td>
            <td>Missouri pond</td>
            <td>Great day out! Plenty of birds and falcon did not get lost.</td>
          </tr>
          </tbody>
        </table>
        </div>
    </div>
  </div>
  )
}
