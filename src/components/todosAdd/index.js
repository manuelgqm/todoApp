import { h } from 'preact';
import style from './style';

const TodosAdd = (props) => {

	const handleClick = () => {
		let updatedState = updateState();
		if (props.handleUpdate){
			props.handleUpdate(updatedState);
		}
		this._newTodoElement.value = '';
	};

	const updateState = () => {
		let newTodoText = this._newTodoElement.value;
		if ( !valid(newTodoText) ) {
			return false;
		}

		let newTodosLastId = props.todosLastId + 1;
		let newTodos = props.todos.concat({
			id: newTodosLastId,
			text: newTodoText
		});

		return {
			todosLastId: newTodosLastId,
			todos: newTodos
		};
	};

	return (
		<div>
			<input class={style.newTodo} ref={(a) => this._newTodoElement = a} />
			<button class={style.addTodo} onClick={handleClick}>Add</button>
		</div>
	);
};

export default TodosAdd;

function valid(text){
	return text.length !== 0;
}
