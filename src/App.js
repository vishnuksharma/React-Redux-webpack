import React from 'react';
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import Footer from "./components/Footer";
import ReposList from './containers/ReposList';
import './scss/index.scss';

const App = () => (
  <div className="component-wrapper">
    <div className="github">
      <ReposList />
    </div>
    {/* <AddTodo />
    <TodoList />
    <Footer /> */}
  </div>
)
export default App;
