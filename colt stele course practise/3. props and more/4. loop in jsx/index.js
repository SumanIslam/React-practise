class App extends React.Component {
  render() {
    return (
      <div>
        <Friends 
         name = "suman"
         hobbies = {['gardening', 'playing', 'reading']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));