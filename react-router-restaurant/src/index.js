import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router, 
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate} from 'react-router-dom';

//Create a bunch of components
function Home(props){
  const{state} = useLocation();
  let value = "not logged in.";
  if(state){
    value = "Login:" + state.loginName;

  }

  return(
    <div>
      <h1> React Router Restaurant</h1>
      <h4>Serving Up URLS like momma used to make!</h4>
      <img alt="man eating" 
          src="https://i0.wp.com/68.media.tumblr.com/159d31bca61108d5bd1a8dedf5c14dfe/tumblr_otlasg917I1ql7xb0o6_1280.gif?"
           />

      </div>
  )
}

function About(props){
  return(
    <div>
      <h1>About US</h1>
      <p>We here at the Triple-R love fresh URLS,
        especially ones tied to awesome React Components.
      </p>
      
    </div>
  )
}

function Menu(props){
  return(
    <div>
      <h1>Menu</h1>
      <div>
        Check out our amazing 24/7 menu:
        <ul>
          <li>Lazy Loading</li>
          <li>Dynamic Router</li>
          <li>Lazy Loading</li>
        </ul>
      </div>
    </div>
  )
}

function LoginButton(props){
  let navigate = useNavigate();

  function handleButton(event){
    navigate("/",{state:{loginName:props.login}});

  }
  return <button onClick={handleButton}>Push</button>;
}

function Navbar(props){
  return(
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <LoginButton login="Scott"/>
    </div>
  )
}



function MyRoutes(props){
  return(
    <Router>
      <div>
        <Navbar/>
        <hr />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes/>
  </React.StrictMode>
);
