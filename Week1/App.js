const heading = React.createElement("h1",{
  id:"title"
},"Heading 1");
const heading2 = React.createElement("h1",{
  id:"title"
},"Heading 2");   

const container = React.createElement("div",{
id:"container"
},[heading,heading2]);





 console.log(heading);
//{} object is for props i.e. title
//React element is a normal object.
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root.
//generally we have only one root and one render method.
// IMP: react  root will override everything and will display what is inside the render.
root.render(container);
