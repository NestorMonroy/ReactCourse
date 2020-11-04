class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Joel"
          from="Nestor"
          bangs={4}
        />
        <Hello
          to="Joe"
        />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
