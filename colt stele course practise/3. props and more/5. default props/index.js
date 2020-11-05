class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
        to="Suman" 
        from="Nahin"
        bangs = {4}
        />
        <Hello 
         to="Jibon"
         />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));