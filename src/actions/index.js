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
    fetch(GIT_USER_REPO_URL + `/${user}/repos`)
        .then(resp => resp.json())
        .then(userRepos => {
          // console.log(userRepos);
          props.dispatch({  type: "GET_USER_REPOS", payload: userRepos })
      });
    
  }
};
