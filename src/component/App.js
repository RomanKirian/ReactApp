import React, { Component } from "react";
import Article from "./Article";
import articles from "./fixtures";
import ArticleList from "./ArticleList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reverted: false
    };
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.revert}>revert</button>
        <ArticleList
          articles={this.state.reverted ? articles.reverse() : articles}
        />
      </div>
    );
  }

  revert = () => {
    console.log("revert");
    this.setState({
      reverted: !this.state.reverted
    });
  };
}

export default App;
