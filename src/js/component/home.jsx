import React, { useEffect, useState } from "react";

//include images into your bundle
import { Task } from "./Task.jsx";
//create your first component

const Home = () => {
	const [todoTask, setTask] = useState([]);
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {});
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<h1>ToDo List</h1>
			</div>
			<div className="row border-top border-right border-left">
				<input
					type="text"
					className="todo-input"
					placeholder={
						todoTask.length == 0 ? "No tasks, add a task" : ""
					}
					value={inputValue}
					onChange={(event) => {
						setInputValue(event.target.value);
					}}
					onKeyPress={(event) => {
						if (event.key == "Enter") {
							if (event.target.value == "") {
								alert("Please add some task's");
								return;
							}
							setTask((prevTask) => [...prevTask, inputValue]);
							setInputValue("");
						}
					}}
				/>
			</div>
			<div className="row d-flex border-top-0 p-3 shadow">
				<ul className="list-unstyled">
					{todoTask.map((task, index) => {
						return (
							<Task
								inputTask={task}
								position={index}
								removeCallBack={(_removeTask) =>
									setTask(
										todoTask.filter(
											(task, index) =>
												index != _removeTask
										)
									)
								}
								key={index}
							/>
						);
					})}
				</ul>
				<div className="row p-3">{`${todoTask.length} items left`}</div>
			</div>
		</div>
	);
};

export default Home;
