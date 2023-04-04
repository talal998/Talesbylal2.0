import React from "react";
import "./App.css";
import ReactGA from "react-ga";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.cmp";

import HomePage from "./pages/homepage/homepage.cmp";
import PortfolioPage from "./pages/portfolio/portfolio.cmp";
import AboutPage from "./pages/about/about.cmp";
import ContactPage from "./pages/contact/contact.cmp";
import PhotoLink from "./pages/photo-link/PhotoLink.cmp";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const TRACKING_ID = "G-L29VD7SEDV";
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/about`}
              component={AboutPage}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/contact`}
              component={ContactPage}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/photos`}
              component={PhotoLink}
            />
            <Route
              exact
              path="/"
              component={() => <HomePage handleClick={this.handleClick} />}
            />
            <Route
              exact
              path="/Talesbylal/"
              component={() => <HomePage handleClick={this.handleClick} />}
            />
            <Route
              exact
              path="/Talesbylal/Portfolio/:title"
              component={PortfolioPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
