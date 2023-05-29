import React from "react";

export const Footer = () => {
	return (
		<footer className="footer">
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
};
