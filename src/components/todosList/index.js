import { h } from 'preact';
import Todo from '../todo';
import style from './style';

const TodosList = (props) => (
	<div class={style.todosList}>
		<h1 class={style.listTitle}>My Todos</h1>
		{props.todos.map(todo =>
			<Todo text={todo.text} id={todo.id} />
		)}
	</div>
);

export default TodosList;
