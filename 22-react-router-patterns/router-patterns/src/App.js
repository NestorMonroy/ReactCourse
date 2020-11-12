import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch'
import NavBar from './NavBar'
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			{/* THIS VERSION USING COMPONENT WORKS AND IS SIMPLER */}
			{/* BUT IT WILL NOT WORK IF YOU NEED TO PASS ADDITIONAL PROPS*/}
			{/* <Route exact path='/food/:name' scomponent={Food} /> */}

			{/* THIS VERSION USING RENDER IS LESS CLEAN BUT MORE EXPLICIT */}
			{/* AND YOU CAN PASS IN YOUR OWN ADDITIONAL PROPS */}
      <NavBar />
			<Switch>
				<Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps} />} />
				<Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />
{/*         <Route exact path="/" render={(routeProps) => <FoodSearch {...routeProps} />} /> */}
        <Route  exact path="/" component={FoodSearch} />
				<Route render={() => <h1> error not found </h1>} />
			</Switch>
		</div>
	);
}

export default App;
