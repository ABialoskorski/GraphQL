// import React, { Component } from "react";
// import { gql } from "apollo-boost";
// import { graphql } from "react-apollo";
//
// const getFilmsQuery = gql`
//   {
//     allFilms {
//       title
//     }
//   }
// `;
//
// class FilmList extends Component {
//
//   //   displayFilms() {
//   //   var data = this.props.data;
//   //   return data.allFilms.map(film => {
//   //     return <li key={film.id}>{film.title}</li>;
//   //   });
//   // }
//   // films= null;
//   //   componentDidMount() {
//   //       this.films = this.displayFilms();
//   //   }
//
//     render() {
//         console.log(this.props.data, this.props.isLoading);
//         console.log(this.props.data.allFilms);
//     return (
//         <div>
//             {this.props.isLoading ? <div>Loading Data</div>:<div>hello DATA{this.props.data.allFilms.map(film => film.title)}</div>
//             }
//         </div>
//         // <div>
//         //     <ul id="book-list">
//         //         {/*{ this.films }*/}
//         //         {this.props.data.allFilms.map(film => (
//         //             <div key={film.id}>
//         //                 <li>
//         //                     {film.id}: {film.name}
//         //                 </li>
//         //             </div>
//         //         ))}
//         //     </ul>
//         // </div>
//     );
//   }
// }
//
// graphql(FilmList, {
//     name: 'data' ,
//     props : ({data}) => {
//         return {
//             data,
//             isLoading:data['networkStatus']==1 || data['networkStatus']==2 || data['networkStatus']==4
//         }
//     }
// });
//
// export default graphql(getFilmsQuery)(FilmList);
