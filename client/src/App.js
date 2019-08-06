import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
//components
import BookList from "./Components/BookList";
import LinkList from "./Components/LinkList";
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
          {/*<BookList />*/}
          <LinkList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
