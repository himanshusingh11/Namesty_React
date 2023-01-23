const Title = () => (
    <a href="/">
   <img alt ="logo" className = "logo" src = "http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"></img>
   </a>
  );


const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            {/* <li><button>Login</button></li> */}
          </ul>
        </div>
      </div>
    );
  };
export default Header;  