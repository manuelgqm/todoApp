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

	constructor (props){
		super(props);
		// this.state = {
		// 	todosLastId: 0,
		// 	todos: []
		// };
		this.state = {
			todosLastId: 2,
			todos: [
				{ id: 1, text: 'create todos list' },
				{ id: 2, text: 'create todo add box' }
			]
		};
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
