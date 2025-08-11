import { useState } from "react";
import "./styles.css";
import logo from "./assets/logo.png"; // Import the logo

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="ShellCycle Logo" className="logo" />

      <h1>SHELL CYCLE 🌱🥚♻</h1>


      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
     

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}