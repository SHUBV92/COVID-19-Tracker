import React, { Component } from "react";

import Card from "./components/Card";
import { fetchData } from "./api";
import "./App.module.css";

class App extends Component {
  state = {
    data: null,
    recievedData: {
      confirmed: null,
      recovered: null,
      deaths: null
    }
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
          <Card
            confirmed={this.state.confirmed}
            deaths={this.state.deaths}
            recovered={this.state.recovered}
          />
        </div>
      </div>
    );
  }
}

export default App;
