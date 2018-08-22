import { h } from 'preact';
import TodosList from '../todosList';
import style from './style';

const todos = [
	{ id: 1, text: 'create todos list' },
	{ id: 2, text: 'create todo add box' }
];

const Content = () => (
  <div class={style.content}>
    <TodosList todos={todos} />
  </div>
);

export default Content;
