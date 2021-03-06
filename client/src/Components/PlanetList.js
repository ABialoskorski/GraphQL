import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import styled from "styled-components";

const PLANET_QUERY = gql`
  query {
    allPlanets {
      name
      population
      climate
    }
  }
`;

class PlanetList extends Component {
  render() {
    const List = styled.ul`
      list-style-type: none;
    `;
    const Paragraph = styled.p`
      font-size: 24px;
      text-align: center;
      color: #964a68;
    `;
    const Population = styled.span`
      color: #435796;
    `;
    const Planet = styled.span`
      font-size: 18px;
      color: #1a9666;
    `;

    return (
      <Query query={PLANET_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          let PlanetList = data;
          return (
            <div>
              <Paragraph>
                <p>Planet List:</p>
              </Paragraph>
              <List key={PlanetList.allPlanets.id}>
                {PlanetList.allPlanets.map(planet => (
                  <li>
                    <Planet>{planet.name}</Planet> with{" "}
                    <Population>{planet.population}</Population> people
                    <br/>Climate:
                    {(() => {
                      if (!planet.climate) {
                        return <span> no climate info</span>;
                      }
                      return planet.climate.map(clima => {
                        return <span> {clima}</span>;
                      });
                    })()}
                  </li>
                ))}
              </List>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default graphql(PLANET_QUERY)(PlanetList);
