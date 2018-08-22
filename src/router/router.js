import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
import ReposList from '../containers/ReposList';
import RepoIssue from '../containers/RepoIssue';
export default class Routing extends Component {
    
    constructor(props) {
        super (props);
       
    }
  
    render() {
     
        return (
            <Router>
             
                 <div className="container">
                    <Route path="/"   exact component={ReposList} />
                    <Route path="/list"   component={ReposList} />
                    <Route path="/issues/:reponame"   component={RepoIssue} />
                </div>
                 
            </Router>
        )
    }
};