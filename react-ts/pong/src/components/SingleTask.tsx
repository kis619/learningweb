import React, { useRef, useState } from "react";
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

	const [edit, setEdit] = useState<boolean>(false);
	const [editTask, setEditTask] = useState<string>(task.task);

	const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
		e.preventDefault();
		setTasks(tasks.map((task) => (task.id === id?{...task, task:editTask}:task)));

		setEdit(false);

	}
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form className="todos__single" onSubmit={(e) => handleEdit(e, task.id)}>
			{
				edit?
				(<input value={editTask}
						onChange={(e) => setEditTask(e.target.value)}
						className="todos__single--text"
					/>)
				:
				task.isDone?
				(<s className="todos__single--text"> {task.task}</s>)
				:
				(<span className="todos__single--text"> {task.task}</span>)
			}

			<div>
				<span
					className="icon" onClick={() => setEdit(!edit)}
				>
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