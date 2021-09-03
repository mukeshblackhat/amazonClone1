import React ,  {useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {
  const [{user } , dispatch]=useStateValue();
  
  //useEffect <<<<<<<<< POWERFUL
  //piece of code which runs based on given condition 

  useEffect(()=>{
    const unsubscribe =auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is logged in ...
        dispatch({
          type:'SET_USER',
          user:authUser,
        });
      }else{
        //the user is logged out...
        dispatch({
          type:'SET_USER',
          user:null,
        });
      }
    });

return () => {
  //any cleaning up operation go up here
   unsubscribe();
};


  } , []);

  console.log("USER IS >>>>", user);

  return (
    <Router>
    <div className="app">
     <Switch>
       <Route path="/checkout">
       <Header/>
       {/* checkout page */}
         <Checkout/>
       </Route>
       <Route path="/login">
         <Login/>
        
       </Route>
       {/* {this is the default route } */}
       <Route path="/">
        <Header/>
        {/* home page  */}
        <Home/>
        
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
