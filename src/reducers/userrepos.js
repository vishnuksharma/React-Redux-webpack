const userRepos = (state={
    userRepos:[],
    repoAndIssuesList:null
  }, action) => {
    switch(action.type) {
        case "GET_USER_REPOS" : 
          return{
            ...state,
            userRepos: action.payload
          }
          break;
        case "GET_REPO_ISSUES" : 
        // console.log(action.payload, 'payload');
          return{
            ...state,
            repoAndIssuesList: action.payload
          }
        break; 
        default: return state;    
    }
}

export default userRepos;