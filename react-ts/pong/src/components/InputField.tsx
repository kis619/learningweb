import React, { useRef } from 'react'
import './styles.css'

interface Props {
	task: string;
	setTask: React.Dispatch<React.SetStateAction<string>>;
	handleAddTask: (e: React.FormEvent) => void;
}

const FieldInput = ({task, setTask, handleAddTask}: Props) => {
	function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
		setTask(e.target.value);
	}
	
	const inputRef = useRef<HTMLFormElement>(null);
	return (
		<form
			className='input'
			onSubmit={(e) => {
				handleAddTask(e);
				inputRef.current?.focus();
			}}
		>
			<input	type="input"
					value={task}
					onChange={(e) =>handleChange(e)}
					placeholder='Enter a task'
					className='input__box'/>
			<button type='submit' className='input__submit'>GO</button>
		</form>
	)
}

export default FieldInput