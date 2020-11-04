// .. conditional in jsx

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return(
      <div>
        <h1>Your Number is: {num}</h1>
        <p>Here, Lucky number is 7. Let's see you are lucky or not!</p>
        <p>{num === 7 ? 'Congrats! You are lucky': 'Oops! You are unlucky'}</p>
      </div>
    );
  }
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'));
