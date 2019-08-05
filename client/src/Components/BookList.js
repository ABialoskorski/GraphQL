import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getFilmsQuery = gql`
  {
    allFilms {
      title
    }
  }
`;



class FilmList extends Component {
    state= {
        Films: []
    };
  // displayFilms() {
  // var data = this.props.data;
  //   return data.allFilms.map(film => {
  //     return <li key={film.id}>{film.title}</li>;
  //   });
  // }
    componentDidMount() {
        this.setState({
            Films: this.props.data.allFilms
        })
    }

    render() {
    console.log(this.props.data.allFilms);
    console.log("STATE " + this.state)
    return (
      <div>
        {/*<ul id="film-list">{this.props.data.allFilms}</ul>*/}
        {/*  <ul>*/}
        {/*      {this.props.data.allFilms.map(film => (*/}
        {/*          <div key={film.id}>*/}
        {/*              <li>*/}
        {/*                  {film.id}: {film.title}*/}
        {/*              </li>*/}
        {/*          </div>*/}
        {/*      ))}*/}
        {/*  </ul>*/}
      </div>
    );
  }
}

export default graphql(getFilmsQuery)(FilmList);
