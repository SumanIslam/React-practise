class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Suman" from="Nahin" />
        <Hello to="Jibon" from="Sayem" />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));