import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([])

  const createTask = (title, taskDesc) => {
    let createdTask = [
      ...tasks,{
        id:Math.round(Math.random() * 999),
        title:title,
        taskDesc:taskDesc,
      }
    ]
    setTasks(createdTask)
  }

  const deleteTask = (id) => {
    let updatedTask = tasks.filter(i => i.id !==id)
    setTasks(updatedTask)
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h3>Görevler</h3>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
