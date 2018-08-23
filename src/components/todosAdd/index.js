import { h, Component } from 'preact';
import style from './style';

export default class TodosAdd extends Component {
	handleClick() {
		let newTodoText = this._newTodoElement.value;
		if ( !valid(newTodoText) ) {
			return false;
		}

		let newTodosLastId = this.props.todosLastId + 1;
		let newTodos = this.props.todos.concat({
			id: newTodosLastId,
			text: newTodoText
		});

		let updatedState = {
			todosLastId: newTodosLastId,
			todos: newTodos
		};
		this.props.handleUpdate(updatedState);
		this._newTodoElement.value = '';
	}

	render({}, { text, todosLastId } ){
		return (
			<div>
				<input class={style.newTodo} ref={(a) => this._newTodoElement = a} />
				<button class={style.addTodo} onClick={() => this.handleClick()}>Add</button>
			</div>
		);
	}
}

function valid(text){
	return text.length !== 0;
}
