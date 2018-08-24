import { h, Component } from 'preact';
import TodosAdd from '../todosAdd';
import TodosList from '../todosList';
import style from './style';

export default class TodoMain extends Component {

	handleUpdate = updatedState => {
		this.setState(updatedState);
	}

	handleRemove = todoId => {
		this.setState( prevState => {
			removeTodo(todoId, prevState.todos);
		});
	}

	setTodos = todos => {
		this.setState({ todos: todos });
	}

	fetchTodos = er => {
		fetch('http://virtserver.swaggerhub.com/manuelgqm5/todoApp/1.0.0/todos?query=all')
			.then(response => response.json())
			.then(todos => this.setTodos(todos));
	}

	constructor (props){
		super(props);
		// this.state = {
		// 	todosLastId: 0,
		// 	todos: []
		// };
		this.state = {
			todosLastId: 1,
			todos: []
		};
	}

	// Fetching todos before component mounting to avoid rendering before fetch is ready
	componentWillMount(){
		this.fetchTodos();
	}

	render ({}, { todos, todosLastId }) {
		return (
		  <div class={style.todoMain}>
				<TodosAdd handleUpdate={this.handleUpdate} todos={this.state.todos} todosLastId={this.state.todosLastId} />
				<TodosList todos={todos} handleRemove={this.handleRemove} />
		  </div>
		);
	}
}

function removeTodo(id, todos) {
	let result = todos;
	return result.splice(todos.findIndex(todo => todo.id === id), 1);
}
