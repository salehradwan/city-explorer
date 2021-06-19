import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertMessage from './components/AlertMessage';
import SearchForm from './components/SearchForm';
import CityData from './components/CityData';
import Map from './components/Map';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Weather from './components/Weather';
import Movies from './components/Movies';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      lat: '',
      lon: '',
      weatherData: '',
      movieData: '',
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
      await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=
      ${this.state.cityName}&format=json`).then(locationIQResponse => {
        this.setState({
          cityData: locationIQResponse.data[0],
          lat: locationIQResponse.data[0].lat,
          lon: locationIQResponse.data[0].lon,
        });
        axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`)
        .then(weatherResponse => {
            this.setState({
              weatherData: weatherResponse.data,
              // displayData: true,
              alert: false
            });
            axios.get(`${process.env.REACT_APP_URL}/movies?query=${this.state.cityName}`).then(movieResponse => {
              this.setState({
                movieData: movieResponse.data,
                displayData: true,
                alert: false
              })
            });
          });
        
      });

    } catch (error) {
      this.setState({
        hasError: error.message,
        alert: true
      })
    }

  };
  render() {
    console.log('movies',this.state.movieData);
    console.log('weather',this.state.weatherData);
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
                    cityData={this.state.cityData}
                  />
                  <Weather
                    weatherData={this.state.weatherData}
                  />
                  <Movies 
                    movieData = {this.state.movieData}
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

// Seattle, Paris, or Amman