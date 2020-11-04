class JSXDemo extends React.Component {
  render() {
    return (
      // <div>
      //   <h1>My Image</h1>
      // <img src="https://source.unsplash.com/random"></img>
      // </div>

      React.createElement("div", null,React.createElement("h1", null, "My Image"),React.createElement("img", {
        src: "https://source.unsplash.com/random"
      }))
    )
  }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));
