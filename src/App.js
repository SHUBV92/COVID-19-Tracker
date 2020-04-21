import React, { Component } from "react";

import Card from "./components/Card";
import { fetchData } from "./api";
import './App.css'

class App extends Component {
  state = {
    data: null,
    confirmed: null,
    recovered: null,
    deaths: null
  };

  componentDidMount = async () => {
    const data = await fetchData();
    this.setState({ data: data });
    console.log("data", data);
    const {
      confirmed,
      deaths,
      recovered
    } = this.state.data;
    console.log("confirmed", confirmed);

    this.setState({
      confirmed: confirmed.value,
      deaths: deaths.value,
      recovered: recovered.value
    });
  };

  render() {
    return (
      <div>
        <div className="card">
          <h1>COVID-19 Tracker</h1>
          <p><h3>Confirmed Cases</h3>{this.state.confirmed}</p>
          <p><h3>Deaths</h3>{this.state.deaths}</p>
          <p><h3>Recovered Cases</h3>{this.state.recovered}</p>
        </div>
      </div>
    );
  }
}

export default App;
