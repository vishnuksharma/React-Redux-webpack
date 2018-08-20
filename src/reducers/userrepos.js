const userRepos = (state=[], action) => {
  console.log(action, 'reducer')
  switch(action.type) {
      case "GET_USER_REPOS" :
        return action.payload;
        break; 

      default: return state;    
  }
}

export default userRepos;