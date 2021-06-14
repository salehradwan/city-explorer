import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                {
                    this.props.weatherData.map(value => {
                      return (
                       <>
                        <p>Description: {value.weather.description}</p>
                        <p>Date: {value.datetime}</p>
                       </>
                      )
                    })
                  }
            </div>
        )
    }
}

export default Weather
