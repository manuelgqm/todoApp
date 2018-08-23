import { h } from 'preact';
import TodosList from '../components/todosList';
import Todo from '../components/todo';
import TodosAdd from '../components/todosAdd';
import { shallow } from 'preact-render-spy';

describe('A Todos App', () => {
	it('list renders 2 items', () => {
		const todos = [
			{ id: 1, text: 'First element' },
			{ id: 2, text: 'Second element' }
		];
		const context = shallow(<TodosList todos={todos} />);
		expect(context.find(<Todo />).length).toBe(2);
	});

	it('Add 3 items', () => {
		const todos = [];
		const todosLastId = 0;
		const todosAdd = shallow(<TodosAdd todos={todos} todosLastId={todosLastId} />);

		todosAdd.find('input').value = 'Todo n1';
		todosAdd.find('button').simulate('click');
		// todosAdd.find('input').value = 'Todo n2';
		// todosAdd.find('button').simulate('click');
		// todosAdd.find('input').value = 'Todo n3';
		// todosAdd.find('button').simulate('click');

		expect(todos.length).toBe(1);
	});
});
