import React from "react";
import "./portfolio.scss";
import PortfolioContainer from "../../components/portfilio-container/portfolio-container.cmp";
import styled from "styled-components";
import { CloudinaryContext } from "cloudinary-react";
import "react-photoswipe/lib/photoswipe.css";
import { PhotoSwipe } from "react-photoswipe";
import artData from "./JSONS/art.json";
import astroData from "./JSONS/astro.json";
import otherData from "./JSONS/other.json";
import portaitsData from "./JSONS/portraits.json";
import travelData from "./JSONS/travel.json";
import wallsData from "./JSONS/walls.json";

const Gallery = styled.div`
  .pswp__img {
    max-width: 90vw;
    max-height: 90vh;
    height: unset !important;
    width: unset !important;
    position: unset;
    margin: 0 auto;
  }
  .pswp__zoom-wrap {
    transform: unset !important;
    align-items: center;
    display: flex;
  }
  .pswp__share--facebook {
    display: none;
  }
`;

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      items: [],
      isOpen: false,
      options: {
        escKey: false,
        showHideOpacity: true,
        bgOpacity: 0.85,
        spacing: 0.15,
      },
    };
  }

  async componentDidMount() {
    const { title } = this.props.match.params;
    if (title === "Art") {
      this.setState({ gallery: artData.resources }, () =>
        this.createUrlArray()
      );
    }
    if (title === "Astro") {
      this.setState({ gallery: astroData.resources }, () =>
        this.createUrlArray()
      );
    }
    if (title === "Other") {
      this.setState({ gallery: otherData.resources }, () =>
        this.createUrlArray()
      );
    }
    if (title === "Portraits") {
      this.setState({ gallery: portaitsData.resources }, () =>
        this.createUrlArray()
      );
    }
    if (title === "Travel") {
      this.setState({ gallery: travelData.resources }, () =>
        this.createUrlArray()
      );
    }
    if (title === "Walls") {
      this.setState({ gallery: wallsData.resources }, () =>
        this.createUrlArray()
      );
    }
  }

  createUrlArray = () => {
    const { title } = this.props.match.params;
    Object.keys(this.state.gallery).map((i) => {
      let url = `https://raw.githubusercontent.com/talesbylal/Talesbylal/main/src/assets/post/${title}/${this.state.gallery[i].public_id}`;
      let imageData = {
        src: url,
        w: portaitsData.resources[i].width,
        h: portaitsData.resources[i].height,
      };
      this.state.items.push(imageData);
    });
  };

  openPhotoSwipe = (index) => {
    this.setState({
      isOpen: true,
      options: {
        ...this.state.options,
        closeOnScroll: false,
        index: index,
      },
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { title } = this.props.match.params;

    return (
      <Gallery>
        <CloudinaryContext cloudName="talesbylal">
          <PortfolioContainer>
            {
              this.state.items.length > 0 ? (
                <PhotoSwipe
                  isOpen={this.state.isOpen}
                  items={this.state.items}
                  options={this.state.options}
                  onClose={this.handleClose}
                />
              ) : (
                ""
              )
            }

            {this.state.gallery.map((data, index) => {
              return (
                <div className="responsive" key={data.public_id}>
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url(${require(`./../../assets/post/${title}/${data.public_id}`)}`,
                    }}
                    onClick={() => this.openPhotoSwipe(index)}
                  />
                </div>
              );
            })}
          </PortfolioContainer>
        </CloudinaryContext>
      </Gallery>
    );
  }
}

export default PortfolioPage;
