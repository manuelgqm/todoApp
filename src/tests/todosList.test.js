import { h } from 'preact';
import TodosList from '../components/todosList';
import Todo from '../components/todo';
import { shallow } from 'preact-render-spy';

describe('A list of Todos', () => {

	test('Renders 2 items', () => {
		const todos = [
			{ id: 1, text: 'First element' },
			{ id: 2, text: 'Second element' }
		];
		const context = shallow(<TodosList todos={todos} />);
		expect(context.find(<Todo />).length).toBe(2);
	});
});
