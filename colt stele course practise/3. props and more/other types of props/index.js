class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="Suman"
          from="Nahin"
          bangs = {4}
          image = 'https://source.unsplash.com/random'
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));