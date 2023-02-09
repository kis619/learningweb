import React from 'react'
import './styles.css'

interface Props {
	task: string;
	setTask: React.Dispatch<React.SetStateAction<string>>;
	handleAddTask: (e: React.FormEvent) => void;
}

const FieldInput: React.FC<Props> = ({task, setTask, handleAddTask}: Props) => {
	function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
		setTask(e.target.value);
	}
	
	return (
		<form
			className='input'
			onSubmit={(e) => {
				handleAddTask(e);
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