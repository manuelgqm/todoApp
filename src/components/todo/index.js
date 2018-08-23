import { h } from 'preact';
import style from './style';

const Todo = (props) => (
	<div class={style.todo}>
		<span>{props.id}</span> - <span>{props.text}</span>
	</div>
);

export default Todo;