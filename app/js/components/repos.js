// var React = require('react');
// var $ = require('jquery');
//
//
// var Repos = React.createClass({
//   getInitialState: function() {
//     return {
//       data: {
//         repos: []
//       }
//     };
//   },
//
//   componentDidMount: function() {
//     this.serverRequest = $.get("https://api.github.com/users/Ho-Luc/repos", function(result) {
//       this.setState({
//         repos: result
//       });
//     }.bind(this));
//   },
//
//   render: function() {
//     var repoArray = this.state.repos;
//     console.log(repoArray);
//     return (
//       <ul>
//         {
//           repoArray.map(function(repo) {
//             return <li>{repo.name}</li>
//           })
//         }
//       </ul>
//     );
//   }
// });
//
// module.exports = Repos;
