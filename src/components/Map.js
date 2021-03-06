import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export class Map extends Component {
    render() {
        return (
            <div>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}
              &q&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`} thumbnail />
            </div>
        )
    }
}

export default Map
