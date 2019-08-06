import React, { Component } from "react";
import Link from "./Link";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

class LinkList extends Component {
  render() {
    const linksToRender = [];

    return (
      <Query query={QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          const linksToRender = data.feed.links;

          return (
            <div>
              {linksToRender.map(link => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LinkList;
