import { h, Component } from 'preact';
import TodosAdd from '../todosAdd';
import TodosList from '../todosList';
import Store from '../../services/Store';
import style from './style';

export default class TodoMain extends Component {
	handleUpdate = updatedState => {
		this.store.updateTodos(updatedState, this);
	}

	handleRemove = todoId => {
		this.store.removeTodo(todoId, this);
	}

	constructor (props) {
		super(props);
		const todosStartingId = 1;
		const apiUrl = 'http://virtserver.swaggerhub.com/manuelgqm5/todoApp/1.0.0/todos?query=all';
		this.store = new Store(apiUrl);
		this.state = {
			todosLastId: todosStartingId,
			todos: []
		};
	}

	// Fetching todos before component mounting to avoid rendering before state is ready
	componentWillMount(){
		this.store.loadTodos(this);
	}

	render ({}, { todos, todosLastId }) {
		return (
			<div class={style.todoMain}>
				<TodosAdd handleUpdate={this.handleUpdate} todos={todos} todosLastId={todosLastId} />
				<TodosList todos={todos} handleRemove={this.handleRemove} />
			</div>
		);
	}
}
