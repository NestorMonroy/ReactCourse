class Friend extends React.Component {
  render(){
    const {name, hobbies} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(n => <li> {n}</li>)}
        </ul>
        
      </div>
    )
  }

}