import React, { useState } from "react";
import { handleKeyUp } from "../../utils";
import { useProjectsValue } from "../../context";
export const Header = () => {
	const { tasks, setTasks } = useProjectsValue();
	const [inputVal, setInputVal] = useState("");
	const keyUpEnter = handleKeyUp("Enter", () => {
		setTasks([...tasks, { text: inputVal, completed: false }]);
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
};
