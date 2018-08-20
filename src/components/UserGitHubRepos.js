import React from 'react';
import connect from 'react-redux';
import {GIT_USER_REPO_URL} from '../constant/constant';

class UserGitHubRepos extends React.Component{
  constructor(props) {
    super(props);
    this.githubUserName = React.createRef();
  }
  searchRepo = (event) => {
    event.preventDefault();
    const usename = this.githubUserName.current.value;
    console.log(this.githubUserName.current.value);

    fetch(GIT_USER_REPO_URL+`/${usename}/repos`)
    .then( (resp) => resp.json() )
    .then( (resp) => {
      console.log(resp);
    })

    // this.githubUserName.current.value = '';

  }

  getReposList = () => {
    return (
      <div>Not found...</div>
    )
  }

  render(){
    return(
      <div className="user-repos">
        <div className="user-repo-form">
          <span><h1 className="title">it-hu</h1></span>
          <form className="githubform" onSubmit={this.searchRepo}>
            <input ref={this.githubUserName} type="text" name="username" placeholder="Enter github user name..."/>
            <button type="submit">Search</button>
          </form>
        </div>
        <hr />
        <div className="repos-list">
          {this.getReposList()}
        </div>
      </div>
    )
  }
}

export default UserGitHubRepos;