import React, { useEffect, useState } from "react";

//include images into your bundle
import { Task } from "./Task.jsx";
//create your first component

const Home = () => {
	const [todoTask, setTask] = useState([]);
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {
		// fetch("https://assets.breatheco.de/apis/fake/todos/user/INVIiICTUS", {
		// 	method: "POST", // or 'PUT'
		// 	body: JSON.stringify([]), // data can be `string` or {object}!
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// })
		// 	.then((res) => res.json())
		// 	.catch((error) => console.error("Error:", error))
		// 	.then((response) => console.log("Success:", response));
	}, []);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/INVIiICTUS", {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {s				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				console.log(resp.status); // el código de estado = 200 o código = 400 etc.
				console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	}, [
		{

		}
	]);

	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<h1>Lista de Tareas</h1>
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
