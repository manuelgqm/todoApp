import { h } from 'preact';
import TodosAdd from '../components/todosAdd';
import { shallow } from 'preact-render-spy';

const setup = propOverrides => {
	const props = Object.assign({
		todosLastId: 0,
		todos: [],
		handleClick: jest.fn()
	}, propOverrides);

	const context = shallow(<TodosAdd {...props} />);

	return {
		props,
		context,
		add: context.find('[onClick]')
	};
};

describe('Todos Adds', () => {
	test('render', () => {
		const { context } = setup();
		expect(context).toMatchSnapshot();
	});

	test('on click calls handleClick', () => {
		const { add, props } = setup();
		add.simulate('click');
		expect(props.handleClick).toBeCalledWith;
	});
});
