import { h } from 'preact';
import style from './style';

function Todo(props){
	this.handleClick = () => (props.handleRemove) ? props.handleRemove(props.id) : false;

	return (
		<div class={style.todo}>
			<span>{props.id}</span> - <span>{props.text}</span>
			<button class={style.remove} onClick={this.handleClick}>X</button>
		</div>
	);
}

export default Todo;
