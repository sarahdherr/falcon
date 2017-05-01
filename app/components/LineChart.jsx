import React from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryScatter, VictoryBar, VictoryBrushContainer, VictoryLabel } from 'victory'

export default class extends React.Component {
  render() {
    const dummyData = [
      { id: 1, current: 920, next_flight: '2017-10-10', timestamp: '2017-10-07', user_id: 1 },
      { id: 2, current: 870, next_flight: '2017-10-10', timestamp: '2017-10-08', user_id: 1 },
      { id: 3, current: 854, next_flight: '2017-10-10', timestamp: '2017-10-09', user_id: 1 },
      { id: 4, current: 900, next_flight: '2017-10-10', timestamp: '2017-10-10', user_id: 1 },
      { id: 5, current: 895, next_flight: '2017-10-15', timestamp: '2017-10-11', user_id: 1 },
      { id: 6, current: 893, next_flight: '2017-10-15', timestamp: '2017-10-12', user_id: 1 },
      { id: 7, current: 874, next_flight: '2017-10-15', timestamp: '2017-10-13', user_id: 1 },
      { id: 8, current: 827, next_flight: '2017-10-15', timestamp: '2017-10-14', user_id: 1 },
      { id: 9, current: 840, next_flight: '2017-10-17', timestamp: '2017-10-15', user_id: 1 },
      { id: 10, current: 835, next_flight: '2017-10-17', timestamp: '2017-10-16', user_id: 1 },
      { id: 11, current: 870, next_flight: '2017-10-21', timestamp: '2017-10-17', user_id: 1 },
      { id: 12, current: 860, next_flight: '2017-10-21', timestamp: '2017-10-18', user_id: 1 },
      { id: 13, current: 894, next_flight: '2017-10-21', timestamp: '2017-10-19', user_id: 1 },
      { id: 14, current: 900, next_flight: '2017-10-21', timestamp: '2017-10-20', user_id: 1 },
      { id: 15, current: 885, next_flight: '2017-10-21', timestamp: '2017-10-21', user_id: 1 },
      { id: 16, current: 893, next_flight: '2017-10-21', timestamp: '2017-10-22', user_id: 1 },
      { id: 17, current: 864, next_flight: '2017-10-25', timestamp: '2017-10-23', user_id: 1 },
      { id: 18, current: 877, next_flight: '2017-10-25', timestamp: '2017-10-24', user_id: 1 },
      { id: 19, current: 880, next_flight: '2017-10-25', timestamp: '2017-10-25', user_id: 1 },
      { id: 20, current: 905, next_flight: '2017-10-25', timestamp: '2017-10-26', user_id: 1 },
      { id: 21, current: 890, next_flight: '2017-10-30', timestamp: '2017-10-27', user_id: 1 },
      { id: 22, current: 870, next_flight: '2017-10-30', timestamp: '2017-10-28', user_id: 1 },
      { id: 23, current: 874, next_flight: '2017-10-30', timestamp: '2017-10-29', user_id: 1 },
      { id: 24, current: 890, next_flight: '2017-10-30', timestamp: '2017-11-01', user_id: 1 },
      { id: 25, current: 895, next_flight: '2017-10-30', timestamp: '2017-11-02', user_id: 1 },
      { id: 26, current: 913, next_flight: '2017-11-15', timestamp: '2017-11-03', user_id: 1 },
      { id: 27, current: 884, next_flight: '2017-11-15', timestamp: '2017-11-04', user_id: 1 },
      { id: 28, current: 877, next_flight: '2017-11-15', timestamp: '2017-11-05', user_id: 1 },
      { id: 29, current: 880, next_flight: '2017-11-17', timestamp: '2017-11-06', user_id: 1 },
    ]

    const idealWeight = 880

    return (
      <div className='col-lg-8 col-md-8'>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]}
            tickFormat={['3/07', '', '', '', '', '', '', '', '3/14', '', '', '', '', '', '', '', '3/22', '', '', '', '', '', '', '', '4/01', '', '', '', '', '']}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x} gms`)}
          />
          <VictoryLine
            data={dummyData}
            x='timestamp'
            y='current'
            interpolation="natural"
            scale='time'
            style={{
              data: {stroke: '#1D263B'}
            }}
          />
          <VictoryScatter
            data={dummyData}
            x='timestamp'
            y='current'
            scale='time'
            style={{
              data: {fill: (d) => d.y < 880 ? '#4CB963' : '#157F1F'}
            }}
          />
        </VictoryChart>
      </div>
    )
  }
}
