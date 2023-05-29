import React from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Footer } from "./components/layout/Footer";
import "./assets/todos.scss";
import { ProjectsProvider } from "./context";
export const App = () => {
	return (
		<ProjectsProvider>
			<section className="todoapp">
				<Header />
				<Content />
				<Footer />
			</section>
		</ProjectsProvider>
	);
};
