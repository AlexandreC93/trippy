import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import Hotels from './components/Hotels';
import HotelPage from './components/HotelPage';
import HotelCard from "./components/HotelCard";
import HotelMap from "./components/HotelMap";
import HotelMarker from "./components/HotelMarker";
import CityCard from "./components/CityCard";
import Error404 from './components/Error404';


function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <h1>App</h1>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/hotel" component={HotelPage} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
