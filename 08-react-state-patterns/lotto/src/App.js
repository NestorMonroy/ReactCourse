import Lottery from './Lotterry'

import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery  />      
      <Lottery title="Mini Daily" maxNum={10} numBalls={3}  />

    </div>
  );
}

export default App;
