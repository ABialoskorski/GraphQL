import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";

const QUERY = gql`
  query {
    allFilms {
      title
      episodeId
      director
    }
  }
`;

class FilmsList extends Component {
  render() {
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          let FilmsToRender = data;
          return (
            <div>
              <ul key={FilmsToRender.allFilms.episodeId}>
                {FilmsToRender.allFilms.map(film => (
                  <li>
                    {film.episodeId} {film.title} by {film.director}
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

// export default FilmsList;
export default graphql(QUERY)(FilmsList);
