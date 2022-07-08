import React, { useState, Fragment } from 'react';


export const TodoList = () => {
	const [list, setlist] = useState([]);

	const addList = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			setlist([...list, e.target.value]);
		}
	};
	const DeleteItems = (indexItem) => {
		setlist((prevState) =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};
	return (
		<div className="container text-center">
			<h1 className="container d-flex justify-content-center text-center col-8 bi bi-x-lg">TODOS</h1>
			<div className="container shadow p-1 bg-white rounded col-8 bi bi-x-lg">
				<input
					type="text"
					placeholder="¿Qué tienes que hacer?"
					className="col-8 border none"
					onKeyPress={addList}
				/>
			</div>

			<div className="text-center">
				<ul class="list-group">
					{list.map((item, index) => (
						<li 
							class="container list-group-item p-1 col-8 bi bi-x-lg d-flex justify-content-between"
							key={index}>
								{item}
							<button className="btn-close" onClick={() => DeleteItems(index)}>
						
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default TodoList