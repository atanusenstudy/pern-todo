import React,{Fragment} from "react";
import './App.css';
//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
//import EditTodo from "./components/EditTodo";




function App() {
  return <Fragment>
    <div className="container">
      <InputTodo />
      <ListTodos />
      { /*<EditTodo /> */}
    </div>
  </Fragment>;
}

export default App;
