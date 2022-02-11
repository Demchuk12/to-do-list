import "./App.css";
import toDoItem from "./components/toDoItem";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <input id="to-do" type="text" />
      <button>Add</button>
      <toDoItem />
    </div>
  );
}

export default App;
