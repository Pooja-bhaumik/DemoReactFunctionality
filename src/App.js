import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {HomepageContainer} from "./pages/Homepage";
import {ShoppageContainer} from "./pages/Shop"
import Header from "./common/Header/Header";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Pooja",
    };
  }

  render() {
    return (
      <div id="root">
        <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomepageContainer />} />
          <Route path="/home" element={<HomepageContainer/>}/>
          <Route path="/shop" element={<ShoppageContainer/>}/>
        </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
