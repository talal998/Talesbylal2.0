import React from "react";
import data from "./LinkMap.json";

import styled from "styled-components";

class PhotoLink extends React.Component {
  constructor() {
    super();
    this.state = { error: null };
    this.handleGoHomeClick = this.handleGoHomeClick.bind(this);
  }
  componentDidMount() {
    const path = window.location.pathname;
    const sections = path.split("/");
    const lastSection = sections[sections.length - 1];
    console.log(lastSection);
    const link = data[lastSection];
    link
      ? (window.location.href = link)
      : this.setState({ error: "Invalid Link" });
  }
  handleGoHomeClick() {
    console.log("click");
    window.location.href = "/Talesbylal/";
  }

  render() {
    console.log();
    return (
      <ErrorDiv>
        <p>{this.state.error}</p>
        <Button onClick={this.handleGoHomeClick}>Return to home?</Button>
      </ErrorDiv>
    );
  }
}

const ErrorDiv = styled.div`
  margin-top: 15vh;
  text-align: center;
  p {
    color: red;
    font-size: 2rem;
  }
`;
const Button = styled.button`
  margin-top: 5vh;

  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;
export default PhotoLink;
