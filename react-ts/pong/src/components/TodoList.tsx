import React from "react";
import { Task } from "../model";
import "./styles.css"
import SingleTask from "./SingleTask";

interface Props {
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;

}
const TodoList: React.FC<Props> = ({tasks, setTasks}: Props) => {
	return (
		<div className="tasks">
			{
				tasks.map((task) => (
					<SingleTask 
						task={task}
						key={task.id}
						tasks={tasks}
						setTasks={setTasks}
						/>
					// <li key={task.id}> {task.task} </li>
				))
			}
		</div>
	)
}

export default TodoList