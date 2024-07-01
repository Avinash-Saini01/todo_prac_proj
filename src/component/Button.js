// Path: src/components/Button.js
import React from "react";

function Button(props) {
    switch (props.color) {
      case 'green': {
        return (
          <button style={{ background: 'green', color: 'white', borderRadius: "5px", width: "100px", height: "30px", border: "1px solid green"}} onClick={props.onClick}
          >
            {props.children}
          </button>
        );
      }
      case 'red': {
        return (
          <button style={{ background: 'red', color: 'white' }} onClick={props.onClick}
          >
            {props.children}
          </button>
        );
      }
      default: {
        return <button onClick={props.onClick}>{props.children}</button>;
      }
    }
  }
  export default Button;
  
  // 💡💡 We need to export the Sqaure component so that we can use it in an external module (file).
  