const initialState = {
  userRepos:[],
  repoAndIssuesList:null,
  githubuser: null,
  api_error: null
}
const userRepos = (state=initialState, action) => {
    switch(action.type) {
        case "GET_USER_REPOS" : 
          return{
            ...state,
            api_error: null,
            githubuser: action.payload[0].owner.login,
            userRepos: action.payload
          }
          break;
        case "GET_REPO_ISSUES" : 
        // console.log(action.payload, 'payload');
          return{
            ...state,
            api_error: null,
            repoAndIssuesList: action.payload
          }
          break; 
        case 'GET_REPO_ISSUES_ERROR':
          return {
            ...state,
            api_error: action.payload
          }
          break;
        default: 
        // console.log(state, 'default')
        return state;    
    }
}

export default userRepos;