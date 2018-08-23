import { h } from 'preact';
import Todo from '../components/todo';
import { shallow } from 'preact-render-spy';

const setup = propOverrides => {
	const props = Object.assign({
		id: 0,
		text: '',
		handleClick: jest.fn()
	}, propOverrides);

	const context = shallow(<Todo {...props} />);

	return {
		props,
		context,
		remove: context.find('[onClick]')
	};
};

describe('Todo', () => {
	test('render', () => {
		const { context } = setup();
		expect(context).toMatchSnapshot();
	});

	test('on click calls handleClick', () => {
		const { remove, props } = setup();
		remove.simulate('click');
		expect(props.handleClick).toBeCalledWith;
	});
});
