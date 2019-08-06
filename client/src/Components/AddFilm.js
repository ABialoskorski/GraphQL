import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation, graphql } from "react-apollo";

const ADD_MUTATION = gql`
  mutation CreateFilm($title: String!, $director: String!, $episodeId: Int!){
      createFilm(title: $title, director: $director, episodeId: $episodeId)
        title
        director
    }
`;

class AddFilms extends Component {
  state = {
    title: "",
    director: "",
    episodeId: 8
  };
    send = () => {
this.props.CreateFilm({
    variables: {
        director:this.state.director,
        title: this.state.title,
        episodeId: this.state.episodeId
    }
})
    };
  render() {
    const { title, director, episodeId } = this.state;

    return (
      <div>
        <div>
          <input
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Title of film"
          />
          <input
            value={director}
            onChange={e => this.setState({ director: e.target.value })}
            type="text"
            placeholder="Director of the film"
          />
        </div>
          <button onClick={this.send}>State</button>
        <Mutation
          mutation={ADD_MUTATION}
          variables={{ director, title, episodeId }}
        >
          {createFilm => <button onClick={createFilm}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

// export default AddFilms;
export default graphql(ADD_MUTATION)(AddFilms);
