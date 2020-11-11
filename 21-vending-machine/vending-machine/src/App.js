import { Route, Switch } from 'react-router-dom';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar'

import './App.css';

function App() {
	return (
		<div className="App">
      <NavBar />
			<Switch>
				<Route exact path="/" render={() => <VendingMachine />} />
				<Route exact path="/soda" render={() => <Soda />} />
				<Route exact path="/sardines" render={() => <Sardines />} />
				<Route exact path="/chips" render={() => <Chips />} />
			</Switch>
		</div>
	);
}

export default App;
