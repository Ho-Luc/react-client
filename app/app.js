var React = require('react');
var ReactDOM = require('react-dom')
// var Repos = require(__dirname + '/js/components/repos.js')
var $ = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>My first React App</h1>
      </div>
    );
  }
})

var Profile = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentWillMount: function() {
    this.serverRequest = $.get(this.props.source, function(result) {
      console.log(result);
      this.setState({
        username: result.login,
        avatar: result.avatar_url,
        followers: result.followers,
        repo: result.public_repos
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <img src={this.state.avatar}/>
        <p>GitHub username : {this.state.username}</p>
        <p>Followers       : {this.state.followers}</p>
        <p>Total Repos     : {this.state.repo}</p>
      </div>
    );
  }
});

var Repos = React.createClass({
  loadRepoData: function() {
    $.ajax({
      url: 'https://api.github.com/users/Ho-Luc/repos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('success hit');
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('err', status, err.toString())
      }.bind(this)
    })
  },

  getInitialState: function() {
    return {
      data: {repos: []}
    }
  },

  componentWillMount: function() {
    this.serverRequest = $.get(this.props.source, function(result) {
      // console.log(result);
      this.setState({
        data: result
      });
    }.bind(this));
    // this.loadRepoData();
  },

  // setTimeout(function(){
  //   this.state.data.map(function(repo) {
  //     return <li>{repo.name}</li>
  //   })
  // }, 2000)

  render: function() {
    console.log(this.state.data);
    return (
      <ul>
      {
        <p>I tried to get my repos to show, but react is wierd. check console for objects</p>
        <p>Will probably resubmit for full points</p>
      }
      </ul>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('header'))
ReactDOM.render(<Profile source="https://api.github.com/users/ho-luc"/>, document.getElementById('content'));
ReactDOM.render(<Repos source="https://api.github.com/users/Ho-Luc/repos"/>, document.getElementById('repos'))
