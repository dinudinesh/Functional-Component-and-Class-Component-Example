import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Functional Component  and Class  Component Example 
// *** Functional Component ***

// function App() {
//   return (
//     <div className="App">
//       <h1>Functional Component </h1>
//     </div>
//   );
// }

// *** Class Based Components ***
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h2>Class Components</h2>
     </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
