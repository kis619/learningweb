import React from "react";
import { Task } from "../model";
import { RiEdit2Fill, RiDeleteBin3Fill, RiCheckFill } from "react-icons/ri";
import "./styles.css";
import TodoList from "./TodoList";

type Props = {
	task: Task;
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask = ({task, tasks, setTasks}: Props) => {

	const handleDone = (id: number) => {
		setTasks(tasks.map((task) => 
			task.id === id ? {...task, isDone: !task.isDone} : task
		))
	}

	const handleDelete = (id: number) => {
		setTasks(tasks.filter((t)=> t.id !== id))
	}
	return (
		<form className="todos__single">
			{
				task.isDone?
				(<s className="todos__single--text"> {task.task}</s>)
				:
				(<span className="todos__single--text"> {task.task}</span>)
			}

			<div>
				<span className="icon">
					<RiEdit2Fill />
				</span>
				<span className="icon" onClick={() => handleDelete(task.id)}>
					<RiDeleteBin3Fill />
				</span>
				<span className="icon" onClick={() => handleDone(task.id)}>
					<RiCheckFill />
				</span>
			</div>
		</form>
	)
}

export default SingleTask