import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertMessage from './components/AlertMessage';
import SearchForm from './components/SearchForm';
import CityData from './components/CityData';
import Map from './components/Map';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      displayData: false,
      hasError: ''

    }
  };

  updateCityState = (evt) => {
    this.setState({
      cityName: evt.target.value,
    });
  };

  getCityData = async (evt) => {
    evt.preventDefault();
    try {
      const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.0788dbe4910fd378fe6241b0ac26587d&q=${this.state.cityName}&format=json`);
      // console.log(axiosResponse);
      this.setState({
        cityData: axiosResponse.data[0],
        displayData: true,
        alert: false
      });
    } catch (error) {
      this.setState({
        hasError: error.message,
        alert: true
      })
    }

  };
  render() {
    return (
      <div>
        {
          this.state.alert &&
          <AlertMessage
            hasError={this.state.hasError}
          />
        }
        <Container>
          <Row>
            <Col>
            <SearchForm
            getCityData={this.getCityData}
            updateCityState={this.updateCityState}
          />
          {
            this.state.displayData &&
            <>
            <Map
                cityData={this.state.cityData}
              />
            <CityData 
                cityData = {this.state.cityData}
              />
            </>
          }
            </Col>
          </Row>
        </Container>
      </div>

    );

  }
}
