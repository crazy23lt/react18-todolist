import React, { useState } from "react";
/**
 ** 1. React 组件是常规的 JavaScript 函数，但组件的名称必须以大写字母开头，否则它们将无法运行！
 ** 2. 这种语法被称为 JSX，它允许你在 JavaScript 中嵌入使用标签。
 */
import "./assets/todos.scss";
import { handleKeyUp } from "./utils";
export default function Todo() {
	const _tasks = [
		{
			text: "1111",
			completed: true
		},
		{
			text: "2222",
			completed: false
		},
		{
			text: "3333",
			completed: false
		}
	];
	const [tasks, setTasks] = useState(_tasks);
	const addTask = text => {
		tasks.push({ text, completed: false });
	};
	const changeTask = () => {
		setTasks([...tasks]);
	};
	return (
		<section className="todoapp">
			<TodoHead addTask={addTask}></TodoHead>
			<TodoBody tasks={tasks} changeTask={changeTask}></TodoBody>
			<TodoFooter></TodoFooter>
		</section>
	);
}
function TodoHead({ addTask }) {
	const [inputVal, setInputVal] = useState("");
	const keyUpEnter = handleKeyUp("Enter", () => {
		addTask(inputVal);
		setInputVal("");
	});
	return (
		<header className="header">
			<h1>Todo List</h1>
			<input
				type="text"
				className="new-todo"
				placeholder="What needs to be done?"
				autoFocus
				value={inputVal}
				onChange={e => setInputVal(e.target.value)}
				onKeyUp={keyUpEnter}
			/>
		</header>
	);
}
function TodoBody({ tasks, changeTask }) {
	const [_tasks, setTasks] = useState(tasks);
	const [editingTask, setEditingTask] = useState(null);
	const [newVal, setNewVal] = useState("");
	const isEditing = task => {
		return `${task === editingTask ? "editing" : ""} ${
			task.completed ? "completed" : ""
		}`;
	};
	const changeCompleted = task => {
		task.completed = !task.completed;
		changeTask();
	};
	const changeText = () => {
		console.dir(newVal);
		setNewVal("");
		setEditingTask(null);
	};
	const taskItem = _tasks.map(task => (
		<li key={task.text} className={isEditing(task)}>
			<div className="view">
				<input
					type="checkbox"
					className="toggle"
					checked={task.completed}
					onChange={changeCompleted}
				/>
				<label onDoubleClick={() => setEditingTask(task)}>{task.text}</label>
				<button className="destroy"></button>
			</div>
			<input
				type="text"
				className="edit"
				defaultValue={task.text}
				value={newVal}
				onKeyUp={handleKeyUp("Enter", changeText)}
				onBlur={changeText}
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
}
function TodoFooter() {
	return (
		<footer className="footer">
			{" "}
			<span className="todo-count">
				<strong>12</strong>
				left
			</span>
			<ul className="filters">
				<li>
					<a href="#/all" className="all">
						All
					</a>
				</li>
				<li>
					<a href="#/active" className="active">
						Active
					</a>
				</li>
				<li>
					<a href="#/completed" className="completed">
						Completed
					</a>
				</li>
			</ul>
			<button className="clear-completed">Clear completed</button>
		</footer>
	);
}
