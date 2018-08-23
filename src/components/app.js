import { h } from 'preact';

import Header from './header';
import TodoMain from './todoMain';

const App = () => (
	<div id="app">
		<Header />
		<TodoMain />
	</div>
);

export default App;
