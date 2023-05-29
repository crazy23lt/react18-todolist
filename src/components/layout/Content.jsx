import React, { useState } from "react";
import { handleKeyUp } from "../../utils";
import { useProjectsValue } from "../../context";
export const Content = () => {
	const { tasks, setTasks } = useProjectsValue();
	const [current, setCurrent] = useState(null);
	const [newText, setNewtext] = useState("");
	/**@description task Class 样式 */
	const isEditing = task => {
		return `${task === current ? "editing" : ""} ${
			task.completed ? "completed" : ""
		}`;
	};
	/**@description 选择缓存的task进行编辑 */
	const selectTask = task => setCurrent(task);
	/**@description 取消缓存的task */
	const cancelTask = task => {
		const idx = tasks.indexOf(task);
		tasks.splice(idx, 1);
		setTasks([...tasks]);
	};
	/**@description 完成task */
	const doneTask = task => {
		task.completed = !task.completed;
		setTasks([...tasks]);
	};
	const editTaskText = ({ key }) => {
		if (key !== "Enter") return;
		console.dir({ newText });
	};
	const closeEditing = e => {
		console.dir(e);
		setCurrent(null);
		setNewtext("");
	};
	const taskItem = tasks.map(task => (
		<li key={task.text} className={isEditing(task)}>
			<div className="view">
				<input
					type="checkbox"
					className="toggle"
					checked={task.completed}
					onChange={doneTask.bind(this, task)}
				/>
				<label onDoubleClick={selectTask.bind(this, task)}>{task.text}</label>
				<button
					className="destroy"
					onClick={cancelTask.bind(this, task)}
				></button>
			</div>
			<input
				type="text"
				className="edit"
				defaultValue={task.text}
				onChange={e => setNewtext(e.target.value)}
				onKeyUp={editTaskText}
				onBlur={closeEditing.bind(this, task)}
			/>
		</li>
	));
	return (
		<section className="main">
			<input type="checkbox" id="toggle-all" className="toggle-all" />
			<label htmlFor="toggle-all">Mark all as complete</label>
			<ul className="todo-list">{taskItem}</ul>
		</section>
	);
};
