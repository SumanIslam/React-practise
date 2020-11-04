// ... embeding javascript in jsx

function getMod() {
  const moods = ['Angry','Hungry','Silly','Quiet','Paranoid'];
  return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
  render() {
     return (
     <h1>my Current mood is: {getMod()}</h1>
    );
  }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));