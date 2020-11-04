function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum()
    let msg;
    if (num === 7 ) {
      msg =
      <div>
        <h1>Congrats you win!</h1>
        <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" alt=""/>
      </div>
    } else {
      msg = <p>Sorry you lose!</p>
    }
    return (
      <div>
        <h1> You number is : {num} </h1>
        {msg}
      </div>
    )
  }
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'))