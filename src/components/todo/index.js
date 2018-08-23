import { h } from 'preact';
import style from './style';

function Todo(props){
	this.handleClick = () => (
		props.handleDelete(props.id)
	);

	return (
		<div class={style.todo}>
			<span>{props.id}</span> - <span>{props.text}</span>
			<button class={style.delete} onClick={this.handleClick}>X</button>
		</div>
	);
}

export default Todo;
