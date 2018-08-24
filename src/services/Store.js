export default class Store {
	constructor() {
		const apiUrl = '#-LOCAL-#';
		this._apiUrl = apiUrl.replace(/(#|-)/g, '');
	}

	loadTodos = component => {
		const localTodoState = localStorage.getItem('todoApp');

		// caching local
		if (localTodoState) {
			component.setState(JSON.parse(localTodoState));
			return;
		}

		if (this._apiUrl === 'LOCAL') {
			return;
		}
		fetch(this._apiUrl + '/todos?query=all')
			.then(response => response.json())
			.then(todos => component.setState({ todos }));
	}

	updateTodos = (updatedState, component) => {
		localStorage.setItem('todoApp', JSON.stringify(updatedState));
		component.setState(updatedState);
	}

	removeTodo = (todoId, component) => {
		let updatedState = removeTodo(todoId, component.state);
		localStorage.setItem('todoApp', JSON.stringify(updatedState));
		component.setState(updatedState);
	}

	// Failed attempt of returning promises instead of passing component
	// loadTodos = () => {
	// 	const localTodoState = localStorage.getItem('todoApp');
	// 	if (localTodoState) {
	// 		return new Promise((resolve) => resolve(JSON.parse(localTodoState)));
	// 	}
	//
	// 	return fetch(this._apiUrl)
	// 		.then(response => ({ todos: response.json() } ));
	// }

}

function removeTodo(id, state) {
	let updatedState = state;
	let todos = updatedState.todos;
	todos.splice(todos.findIndex(todo => todo.id === id), 1);
	return updatedState;
}
