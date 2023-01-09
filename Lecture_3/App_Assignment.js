import React from "react";
import ReactDOM from "react-dom/client";
import { createElement as ce } from "react";
import logo from './assests/images/logo.png'
import user from './assests/images/user.png'
import './assests/css/header.css'

// const container  = ce ('div',{
//     'className':'title'

// },[
//     ce('h1',{},'Heading H1'),
//     ce('h2',{},'Heading H2'),
//     ce('h3',{},'Heading H3'),
// ]);

const TitleComponent = () => (
    <div className="title_jsx">
        <h1>
            Heading 1
        </h1>
        <h2>
            Heading 2
        </h2>
        <h3>
            Heading 3
        </h3>
        
    </div>
)


const HeaderComponent = () => (
    <div className="header">
        <div className="logo">
         <img src={logo}></img>
        </div>
        <div className="search-bar">
         <input type ="search" placeholder="Search ..."></input>
        </div>
        <div className="user">
         <img src = {user}></img>
        </div>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));



// root.render(container);
const MainComponent = () => 
(
    <div className="container">
        <TitleComponent/>
        <HeaderComponent/>
        
    </div>
)


root.render(<MainComponent/>)
