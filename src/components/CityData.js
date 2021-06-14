import React, { Component } from 'react'

export class CityData extends Component {
    render() {
        return (
            <div>
                <p>The City name is: {this.props.cityData.display_name}</p>
                <p>The lat is: {this.props.cityData.lat}</p>
                <p>The lon is: {this.props.cityData.lon}</p>
            </div>
        )
    }
}

export default CityData
