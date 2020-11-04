class App extends React.Component {
  render() {
    return (
      <div>
        <Friend 
          name="Joel"
          hobbies={['Piano', 'Singing', 'Dancing']}

        />
        <Friend
          name="Frida"
          hobbies={['Drawing', 'Painting']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))