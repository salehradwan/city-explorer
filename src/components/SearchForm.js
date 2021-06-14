import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class SearchForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.getCityData}>

                    <Form.Group controlId="formBasicSearch">
                        <Form.Label> City Explorer</Form.Label>
                        <Form.Control type="text" placeholder="Enter City Name"
                         onChange={this.props.updateCityState} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
            </div>
        )
    }
}

export default SearchForm
