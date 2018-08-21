import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getRepoIssues} from '../actions/index';
import {formatDate} from '../utils/utils';

class ReposIssue extends React.Component{
  constructor(props) {
    super(props);    
  }
  
  renderIssuesList = () => {
    console.log(this.props);
    
    return this.props.repoDetail_Issues.issuesList.map(issue => {
      // console.log(repo.id);
      return (
        <li
          className="border-bottom"
          key={issue.id}>
          <div className="title-n-btn">
            <div className="title">
              <h3>
                <div>
                  <svg className="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                  <a className="issue-title">&nbsp;&nbsp;{issue.title}</a>
                </div>              
                <span className="issue-desc">
                  #{issue.number} opened {formatDate(issue.created_at)} by {issue.user.login}</span>
              </h3>
            </div>
          </div>
        </li>
      );
    });
  }
  
  render(){
    if (!this.props.repoDetail_Issues){
      return(<div>Loading...</div>);
    }
    const repoDetail = this.props.repoDetail_Issues.repoDetail;
    console.log(repoDetail);
    return(
      <div className="user-repos-issues">
        <ul className="breadcrumb">
          <li>
          <svg className="svg-icon octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          &nbsp;<Link to="/">{repoDetail.owner.login}</Link></li>
          <li><a>{repoDetail.name}</a></li>
        </ul>
        <main className="tabs">
          <input className="tab-input" id="tab1" type="radio" name="tabs" defaultChecked={true} />
          <label htmlFor="tab1">              
              <svg className="tab-issue-icon octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
              <span>&nbsp;Issues&nbsp;</span>
              <span className="counter">
                {repoDetail.open_issues_count}
              </span>              
          </label>


          <section className="tab-content" id="content1">
            <div className="user-issues-list">
              <ul>{this.renderIssuesList()}</ul>
            </div>
          </section>
          
        </main>
        
      </div>
    )
  }
}

function mapStateToProps(store) {
  // console.log(store, 'vishnu');
  return {
    repoDetail_Issues: store.userRepos.repoAndIssuesList
  };
}

export default  connect(mapStateToProps) (ReposIssue);