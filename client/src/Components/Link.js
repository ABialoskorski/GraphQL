import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div>
        {this.props.data.allFilms.episodeId} ({this.props.data.allFilms.title})
      </div>
    );
  }
}

export default Link;
