// ... class based component 

// class Hello extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello There!</h1>
//         <h1>Hello There!</h1>
//         <h1>Hello There!</h1>
//       </div>
//     )
//   }
// }

// ... function based component

// function Hello() {
//   return (
//     <div>
//       <h1>Hello There!</h1>
//       <h1>Hello There!</h1>
//       <h1>Hello There!</h1>
//   </div>
//   )
// }

// ... JSX demo

// class JSXDemo extends React.Component {
//   render() {
//     return (
//       // <div>
//       //   <h1>My Image</h1>
//       // <img src="https://source.unsplash.com/random"></img>
//       // </div>

//       React.createElement("div", null,React.createElement("h1", null, "My Image"),React.createElement("img", {
//         src: "https://source.unsplash.com/random"
//       }))
//     )
//   }
// }

// ... embeding javascript in jsx

// function getMod() {
//   const moods = ['Angry','Hungry','Silly','Quiet','Paranoid'];
//   return moods[Math.floor(Math.random() * moods.length)];
// }
// class JSXDemo extends React.Component {
//   render() {
//      return (
//      <h1>my Current mood is: {getMod()}</h1>
//     );
//   }
// }

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