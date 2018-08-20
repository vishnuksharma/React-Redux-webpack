import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getGithubUserRepo} from '../actions/index';

class UserGitHubRepos extends React.Component{
  constructor(props) {
    super(props);
    this.githubUserName = React.createRef();
  }
  selectRepo = (repoUrl) => {
    console.log(repoUrl);
  }
  searchRepo = (event) => {
    event.preventDefault();
    const usename = this.githubUserName.current.value;
    getGithubUserRepo(usename, this.props)
    // this.githubUserName.current.value = '';

  }

  renderList() {
    console.log(this.props.repos)
    if (!this.props.hasOwnProperty('repos')){
      return (
        <div>Not found...</div>
      )
    }
    return this.props.repos.map((repo) => {
      // console.log(repo.id);
        return (
          
            <li className="border-bottom"
                key={repo.id}
                onClick={() => this.selectRepo(repo.url)}
            >
            <div className="title-n-btn">
              <div className="title">
                <h3>
                  <a>{repo.name}</a>
                </h3>
              </div>
              <div className="select-repo"><button>Select</button></div>
            </div>
            </li>
        );
    });
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
        <div className="user-repositories-list">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  console.log(store);
  return {
      repos: store.userRepos
  };
}

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({selectUserRepo: getGithubUserRepo}, dispatch);
// }

export default  connect(mapStateToProps) (UserGitHubRepos);