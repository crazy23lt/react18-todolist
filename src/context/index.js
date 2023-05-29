import React, { createContext, useContext, useState } from "react";
/**@description useState 定义内部状态*/
export const useProjects = () => {
	const [tasks, setTasks] = useState([
		{ text: "message1", completed: false },
		{ text: "message2", completed: false },
		{ text: "message3", completed: false },
		{ text: "message4", completed: false },
		{ text: "message5", completed: false }
	]);
	return { tasks, setTasks };
};
/**@description createContext 创建一个上下文 */
export const ProjectsContext = createContext();
/**@description 创建Provider组件包裹子组件 */
export const ProjectsProvider = ({ children }) => {
	const { tasks, setTasks } = useProjects();
	return (
		<ProjectsContext.Provider value={{ tasks, setTasks }}>
			{children}
		</ProjectsContext.Provider>
	);
};
export const useProjectsValue = () => useContext(ProjectsContext);
