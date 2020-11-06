import WiseSquare from './WiseSquare';
import WiseSquareWithProps from './WiseSquareWithProps';
import  ExperimentalSquare from './ExperimentalSquare';

import './App.css';

function App() {
	return (
		<div className="App">
			<WiseSquare />
			<WiseSquareWithProps />
      <ExperimentalSquare />
		</div>
	);
}

export default App;
