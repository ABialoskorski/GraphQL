import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import FilmsList from "./Components/FilmsList";
import AddFilm from "./Components/AddFilm";

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
          <AddFilm />
          <FilmsList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
