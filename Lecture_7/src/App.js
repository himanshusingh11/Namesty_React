import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
// import Cart from "../components/Cart";

const AppLayout = () => {
  return (
    <> 
      <Header />
      <Outlet/>
      {/* <Body /> */}
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
      path:"/",
      element:<Body/>,
      },
      {
      path:"/about",
      element:<About/>,
     },
     {
      path:"/contact",
      element:<Contact/>,
     },
     {
      path:"/cart",
      element:<Cart/>,
     },
     
   ]
  },
  // {

  //   path:"/about",
  //   element:<About/>
  // },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
