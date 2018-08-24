import { h } from 'preact';
import TodoMain from '../components/todoMain';
import { shallow } from 'preact-render-spy';

const setup = propOverrides => {
	const props = Object.assign({
		handleUpdate: jest.fn(),
		handleRemove: jest.fn()
	}, propOverrides);

	const context = shallow(<TodoMain {...props} />);

	return {
		props,
		context
	};

};

describe('Todo Main', () => {
	test('render', () => {
		const { context } = setup();
		expect(context).toMatchSnapshot();
	});

});
