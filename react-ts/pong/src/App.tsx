import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import { Task } from './model';

const App: React.FC = () => {
  
	const [task, setTask] = useState<string>('');
	const [allTasks, setAllTasks] = useState<Task[]>([]);

	const handleAddTask = (e: React.FormEvent) => {
		
		e.preventDefault();
		if (task) {
			setAllTasks([...allTasks, {id: Date.now(), task: task, isDone: false}]);
			setTask("");
		}

	};
	console.log(allTasks);


	return (
    <div className="App">
		<header>
			<span className="heading"> Taskify</span>
		</header>
		<main>
		<InputField task={task} setTask={setTask} handleAddTask={handleAddTask}/>
		{allTasks.map((t) => (
			<li>{t.task} {t.id}     {t.isDone}</li>
		))}
		</main>
    </div>
  );
}

export default App;
