import React, { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: props.defaultOpen };

    this.handleClick = handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) {
      this.setState({ isOpen: nextProps.defaultOpen });
    }
  }

  render() {
    const { article } = this.props;
    const body = this.state.isOpen ? <section>{article.text}</section> : "";
    return (
      <div>
        <h2>{article.title}</h2>
        <button onClick={this.handleClick}>
          {this.state.isOpen ? "close" : "open"}
        </button>
        {body}
      </div>
    );
  }
}

function handleClick() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

export default Article;
