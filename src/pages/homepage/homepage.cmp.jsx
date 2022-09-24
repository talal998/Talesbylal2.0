import React from "react";
import "./homepage.scss";
import ItemHome from "../../components/item-home/item-home.cmp";
import { FullPage, Slide } from "react-full-page";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          id: 1,
          title: "Portraits",
          subtitle: "  ",
          imageUrl: require("./../../assets/post/1.jpg"),
          revield: false,
        },
        {
          id: 2,
          title: "Travel",
          subtitle: " ",
          imageUrl: require("./../../assets/post/2.jpg"),
          revield: false,
        },
        {
          id: 3,
          title: "Art",
          subtitle: " ",
          imageUrl: require("./../../assets/post/3.jpg"),
          revield: false,
        },
        {
          id: 4,
          title: "Other",
          subtitle: " ",
          imageUrl: require("./../../assets/post/4.jpg"),
          revield: false,
        },
        {
          id: 5,
          title: "Astro",
          subtitle: " ",
          imageUrl: require("./../../assets/post/5.jpg"),
          revield: false,
        },
        {
          id: 6,
          title: "Walls",
          subtitle: " ",
          imageUrl: require("./../../assets/post/6.jpg"),
          revield: false,
        },
      ],
    };
  }

  handleWaypoint = (index, action) => {
    this.setState((state) => {
      const list = state.sections.map((item, i) => {
        if (index === i) {
          if (action === "enter") {
            return (item.revield = true);
          } else if (action === "leave") {
            return (item.revield = false);
          }
        }
        return item;
      });
      return {
        list,
      };
    });
  };

  render() {
    return (
      <FullPage className="fullpage-wrapper">
        {this.state.sections.map((item, index) => (
          <Slide key={item.id}>
            <ItemHome
              item={item}
              handleWaypoint={this.handleWaypoint}
              reviel={this.state.sections}
              index={index}
            />
          </Slide>
        ))}
      </FullPage>
    );
  }
}

export default HomePage;
