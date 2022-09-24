import React from "react";
import "./about.scss";
import { Waypoint } from "react-waypoint";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      revield: false,
    };
  }

  handleWaypoint = () => {
    this.setState((prevState) => ({
      revield: true,
    }));
  };

  render() {
    return (
      <div className="about flex-c">
        <div className={`letters ${this.state.revield ? "show" : ""}`}>
          Photographer
        </div>
        <div className="backround" />
        <div
          className={`about-text flex-c ${this.state.revield ? "show" : ""}`}
        >
          <Waypoint onEnter={this.handleWaypoint} />
          <h1 className="title">About me</h1>
          <h2>Self-taught, ex-hobbyist photographer</h2>
          <p>
            They say a jack of all trades is a master of none, but oftentimes
            better than a master of one. That's me as a photographer, someone
            who dives at any challenge when it comes to photos/videos. Currently based in Lahore, Pakistan,
            however open to challenges from across the world. {" "}
          </p>
          <div className="about-social flex-c">
            <Link className="link-button" to="/contact">
              Contact me
            </Link>
            <a href="https://www.instagram.com/talesbylal/" target="blank">
              <FaInstagram className="react-icons" />
            </a>
          </div>
        </div>
        <div className="about-image-area flex-c">
          <img
            src="http://talesbylal.com/uploads/me.png"
            className={`about-img ${this.state.revield ? "show" : ""}`}
            alt="tbl-portrait"
          />
        </div>
      </div>
    );
  }
}

export default AboutPage;
