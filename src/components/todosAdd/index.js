import { h, Component } from 'preact';
import style from './style';

export default class TodosAdd extends Component {

	handleClick() {
		this.updateState();
		if (this.props.handleUpdate){
			this.props.handleUpdate(this._updatedState);
		}
		this._newTodoElement.value = '';
	}

	updateState(){
		let newTodoText = this._newTodoElement.value;
		if ( !valid(newTodoText) ) {
			return false;
		}

		let newTodosLastId = this.props.todosLastId + 1;
		let newTodos = this.props.todos.concat({
			id: newTodosLastId,
			text: newTodoText
		});

		this._updatedState = {
			todosLastId: newTodosLastId,
			todos: newTodos
		};
	}

	render(){
		return (
			<div>
				<input class={style.newTodo} ref={(a) => this._newTodoElement = a} />
				<button class={style.addTodo} onClick={this.handleClick.bind(this)}>Add</button>
			</div>
		);
	}
}

function valid(text){
	return text.length !== 0;
}
