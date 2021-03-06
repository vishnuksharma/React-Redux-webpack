import { GIT_USER_REPO_URL } from "../constant/constant";
import userRepos from "../reducers/userrepos";

let nextTodoId = 0;

export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const getGithubUserRepo = (user, props) => {
  // console.log(user);
  if (user){
    fetch(GIT_USER_REPO_URL + `/${user}/repos?page=1&per_page=100`)
        .then(resp => resp.json())
        .then(userRepos => {
          if (userRepos.hasOwnProperty('message')){
            props.dispatch({  type: "GET_REPO_ISSUES_ERROR", payload: userRepos })
          } else {
            props.dispatch({  type: "GET_USER_REPOS", payload: userRepos })
          }
      })
      .catch((e)=>{
        // console.log(e, 'errror')
        props.dispatch({  type: "GET_REPO_ISSUES_ERROR", payload: e })
      });;
    
  }
};



export const setRepoName = (name, props) => {
  if (name.url){
    fetch(name.url + `/issues`)
        .then(resp => resp.json())
        .then(issuesList => {
          props.dispatch({  type: "GET_REPO_ISSUES", payload: {repoDetail : name, issuesList: issuesList} })
      })
      .catch((e)=>{
        props.dispatch({  type: "GET_REPO_ISSUES_ERROR", payload: e })
      });    
  }
  // if (name.url){
  //   return (dispatch) => {
  //     fetch(name.url + `/issues`)
  //         .then(resp => resp.json())
  //         .then(issuesList => {
  //           console.log(issuesList);
  //           dispatch({  type: "GET_REPO_ISSUES", payload: {repoDetail : name, issuesList: issuesList} })
  //       });
  //     // You might also dispatch 'FETCH_FAILED'
  //     }
  // }  

};



