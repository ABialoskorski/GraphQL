import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation, graphql } from "react-apollo";

const ADD_QUERY = gql`
  mutation AddFilm($title: String!, $director: String!) {
    post(title: $title, director: $director) {
      title
      director
    }
  }
`;

class AddFilms extends Component {
  state = {
    title: "",
    director: ""
  };

  render() {
    const { title, director } = this.state;

    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            value={title}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="Title of film"
          />
          <input
            value={director}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="Director of the film"
          />
        </div>
        <Mutation mutation={ADD_QUERY} variables={{ director, title }}>
          {() => (
            <button onClick={`...........`}>Submit</button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default graphql(ADD_QUERY)(AddFilms);
