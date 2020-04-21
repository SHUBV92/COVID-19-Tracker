import React, { Component } from "react";

import Card from './components/Card'
import { fetchData } from './api'

class App extends Component {
  
     componentDidMount = () => {
    const data = fetchData()
    }

    render() {
    return <div></div>;
  }
}

export default App;
