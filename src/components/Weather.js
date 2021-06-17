import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export class Weather extends Component {
    render() {
        console.log('wee',this.props);
        return (
            <div>
                {
                    this.props.weatherData.map(weatherObj => {
                        return (
                            <>
                                <ListGroup>
                                    <ListGroup.Item variant="info">Description: {weatherObj.description}</ListGroup.Item>
                                    <ListGroup.Item variant="info">Date: {weatherObj.datetime}</ListGroup.Item>
                                   </ListGroup>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default Weather
