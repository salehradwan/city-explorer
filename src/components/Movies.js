import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'


export class Movies extends Component {
    render() {
        console.log('moo',this.props);
        return (
            <div>
                {
                    this.props.movieData.map(value => {
                        return (
                            <>
                                <ListGroup>
                                    <ListGroup.Item variant="info">Description: {value.description}</ListGroup.Item>
                                    <ListGroup.Item variant="info">Date: {value.date}</ListGroup.Item>
                                    <ListGroup.Item variant="info">Title: {value.title}</ListGroup.Item>
                                    <ListGroup.Item variant="info">Overview: {value.overview}</ListGroup.Item>
                                    <ListGroup.Item variant="info">Average_votes: {value.vote_average}</ListGroup.Item>
                                    <ListGroup.Item variant="info">Total_votes: {value.vote_count}</ListGroup.Item>
                                    <Image src={`https://image.tmdb.org/t/p/w500${value.poster_path} thumbnail`}/>
                                    <ListGroup.Item variant="info">Popularity: {value.popularity}</ListGroup.Item>
                                    <ListGroup.Item variant="info">Released_on: {value.release_date}</ListGroup.Item>
                                   </ListGroup>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default Movies
