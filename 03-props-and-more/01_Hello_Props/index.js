class App extends React.Component {
  render(){
    return (
      <div>
        <Hello to="Joel" from="Nestor"/>
        <Hello to="Other" from="Other From"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))