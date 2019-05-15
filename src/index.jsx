import React from "react";
import giphy from "giphy-api";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import Gif from "./components/Gif";
import ListGif from "./components/ListGif";
import "../assets/stylesheets/application.scss";

class App extends React.Component {
  state = {
    input: "",
    gifs: null,
    selected: "11ctq1pDmD3cB2"
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
    giphy("jmHM25AtCUYQKJfJKM7Sg92hL4jxc9ka").search(
      {
        q: this.state.input,
        limit: 10
      },
      (err, res) => {
        this.setState({ gifs: res.data });
      }
    );
  };

  handleSelect = id => {
    this.setState({ selected: id });
  };

  render() {
    const { gifs, selected } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar handleChange={this.handleChange} />
          <div className="selected-gif">
            <Gif id={selected} />
          </div>
        </div>
        <div className="right-scene">
          <ListGif gifs={gifs} handleSelect={this.handleSelect} />
        </div>
      </div>
    );
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
