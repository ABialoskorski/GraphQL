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

class LinkList extends Component {
  render() {
    console.log(this.props.data.allFilms);
    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          let filmsToRender = data;
          return(
           <div>
             {data.allFilms.map(film => (
               <ul key={film.episodeId}>
                 <li>{film.title} by {film.director}</li>
                </ul>
             ))}
           </div>
          );
        }}
      </Query>
    );
  }
}

// export default LinkList;
export default graphql(QUERY)(LinkList);
