import { h } from 'preact';
import TodosList from '../components/todosList';
import { shallow } from 'preact-render-spy';

const setup = propOverrides => {
	const props = Object.assign({
		todos: []
	}, propOverrides);

	const context = shallow(<TodosList {...props} />);

	return {
		props,
		context
	};

};

describe('Todos List', () => {
	test('render', () => {
		const { context } = setup();
		expect(context).toMatchSnapshot();
	});

});
