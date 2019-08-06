import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddFilm from "./Components/AddFilm";
//components
import FilmsList from "./Components/FilmsList";
//apollo client setup
const client = new ApolloClient({
  uri: "https://swapi.graph.cool/"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>GraphQL</h1>
            <AddFilm/>
          <FilmsList/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
