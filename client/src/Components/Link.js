import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql, Query } from "react-apollo";

const getFilmsQuery = gql`
    {
        allFilms {
            title
        }
    }
`;

class FilmList extends Component {
    render() {
        // console.log(this.props.data, this.props.isLoading);
        // console.log(this.props.data.allFilms);
        return (<div>
                <div>
                    {this.props.link.description} ({this.props.link.url})
                </div>
            </div>
        )
    }
}

export default graphql(getFilmsQuery)(FilmList);
