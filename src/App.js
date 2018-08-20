import React from 'react';
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import Footer from "./components/Footer";
import UserGitHubRepos from './components/UserGitHubRepos';
import './scss/index.scss';

const App = () => (
  <div className="component-wrapper">
    <div className="github">
      <UserGitHubRepos />
    </div>
    {/* <AddTodo />
    <TodoList />
    <Footer /> */}
  </div>
)
export default App;
