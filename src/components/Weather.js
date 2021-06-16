import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export class Weather extends Component {
    render() {
        console.log('prp',this.props);
        return (
            <div>
                {
                    this.props.weatherData.map(value => {
                        return (
                            <>
        
                                <ListGroup>
                                    <ListGroup.Item variant="info">Description: {value.description}</ListGroup.Item>
                                    <ListGroup.Item variant="info">Date: {value.datetime}</ListGroup.Item>
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
