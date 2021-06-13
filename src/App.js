import React, { PureComponent } from 'react'
import axios from 'axios';
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      displayData: false,
      hasError: false

    }
  };

  updateCityState = (evt) => {
    this.setState({
      cityName: evt.target.value,

    });
  };

  getCityData = async (evt) => {
    evt.preventDefault();
    const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.0788dbe4910fd378fe6241b0ac26587d&q=${this.state.cityName}&format=json`);
    console.log(axiosResponse);
    this.setState({
      cityData: axiosResponse.data[0],
      displayData: true
    });
  };
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ 
      hasError: true 
    });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="App">
        <form onSubmit={this.getCityData}>
          <br></br>
          <br></br>
          <lable> City Name</lable>
          <input type='text' onChange={this.updateCityState} />
          <br></br>
          <br></br>
          <input type='submit' value='Explore!' />
        </form>
        {
          this.state.displayData &&
          <div>
            <p>{this.state.cityData.display_name}</p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.0788dbe4910fd378fe6241b0ac26587d&q&center=${this.state.cityData.lat},
               ${this.state.cityData.lon}&zoom=10`} alt='' />

          </div>
        }
      </div>
    );
    
  }
}

// https://maps.locationiq.com/v3/streets/r/${10}/${this.state.cityData.lat}/${this.state.cityData.lon}.png?key=pk.0788dbe4910fd378fe6241b0ac26587d
