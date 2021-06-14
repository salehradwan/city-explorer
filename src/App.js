import React, { PureComponent } from 'react'
import axios from 'axios';
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
          alert(`${this.state.hasError}`)
        }
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
              <p></p>
              <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.0788dbe4910fd378fe6241b0ac26587d&q&center=${this.state.cityData.lat},
               ${this.state.cityData.lon}&zoom=10`} alt='' />
               <p>`The City name is: {this.state.cityData.display_name}`</p>
               <p>`The lat is: {this.state.cityData.lat}`</p>
               <p>`The lon is: {this.state.cityData.lon}`</p>

            </div>
          }
        </div>
      </div>

    );

  }
}

// https://maps.locationiq.com/v3/streets/r/${10}/${this.state.cityData.lat}/${this.state.cityData.lon}.png?key=pk.0788dbe4910fd378fe6241b0ac26587d
