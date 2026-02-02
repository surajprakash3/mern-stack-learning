import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [level, setLevel] = useState("Easy");

  const [activeTasks, setActiveTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  function addTask() {
    if (!date || !task) {
      alert("Please fill all fields");
      return;
    }

    const newTask = { date, task, level };
    setActiveTasks([...activeTasks, newTask]);

    setTask("");
  }

  function taskDone(index) {
    const completedTask = activeTasks[index];

    setActiveTasks(activeTasks.filter((_, i) => i !== index));
    setDoneTasks([...doneTasks, completedTask]);
  }

  return (
    <div className="body">
      <h2>Task Tracker</h2>

      <div className="container">
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label>Task</label>
        <input
          type="text"
          value={task}
          placeholder="Your Task"
          onChange={(e) => setTask(e.target.value)}
        />

        <label>Level</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button onClick={addTask}>ADD</button>
      </div>

      
      <h3 className="h3">Active Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activeTasks.map((t, index) => (
            <tr key={index}>
              <td>{t.date}</td>
              <td>{t.task}</td>
              <td>{t.level}</td>
              <td>
                <button onClick={() => taskDone(index)}>Done</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <h3 className="h3">Completed Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {doneTasks.map((t, index) => (
            <tr key={index}>
              <td>{t.date}</td>
              <td>{t.task}</td>
              <td>{t.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
