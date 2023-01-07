import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ===> Object ===> HTML(DOM)

//JSX is a  is html like syntax but it is not HTML inside javascript

// JSX===> React.createElement ===> Object ===> HTML(DOM)  babel converts JSX to React.createElement.
const heading = (
  <h1 id="title" key="h1">
    JSX heading
  </h1>
);
//above is react  element 
const Title = () => (
  <h1 id="title" key="title">
    JSX Title
  </h1>
);

//React Component

//Funtional  -- new way of writing code.is a jS function that returs our React Element or composition of react element or component itself.

//Class Based Component --old way of writing code.

//Name of the component starts with capital letters.
const HeaderComponent = () => {
  return (
    <div>
      {<Title />}  
      {/* /We can also write {<Title()>}  it is known as component composition */}
      {heading}
      <h1 style={{ color: "Blue" }}>React Header Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root.
//generally we have only one root and one render method.
// IMP: react  root will override everything and will display what is inside the render.
root.render(heading); //this is for react element
root.render(<HeaderComponent />); // this is for component
