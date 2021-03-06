import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon  from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';


function Header() {
   const [{basket , user}]=useStateValue();


   const login =( )=>{
      if(user){
       auth.signOut();
     }

   };


   return (
      <nav className="header">
         {/* {logo on the left -.image} */}
         <Link  to="/">
         <img
            className="header_logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""
         />
         </Link>
         
         {/* {search box} */}
         <div className="header_search">
         <input type="text" class="header_searchInput"/>
          <SearchIcon className="header_searchIcon "/>
         </div>
          
             

         {/* {3 links } */}
          <div className="header_nav">

           {/* {first link} */}
           <Link to={!user && "/login"} className="header_link">
           <div onClick={login} className="header_option">
           <span className="header_optionLineOne"> hello {user?.email}</span>
           <span  className="header_optionLineTwo">{ user ? 'Sign Out' : 'Sign in'}</span>
           </div>
           </Link>

           {/* {second link} */}
           <Link to="/"className="header_link">
           <div className="header_option">
           <span className="header_optionLineOne">Returns</span>
           <span className="header_optionLineTwo">& Orders</span>
           </div>
           </Link>

           {/* {third link} */}
           <Link to="/"className="header_link">
           <div className="header_option">
           <span className="header_optionLineOne">Your</span>
           <span className="header_optionLineTwo">Prime</span>
           </div>
           </Link>
           
           {/* {forth link} */}
           <Link to="/checkout"className="header_link" >
              <div className="header_optionBasket">
                  {/* {shopping basket icon } */}
                  <ShoppingBasketIcon/>
                  {/* {Number of items in basket } */}
                  <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
              </div>
           </Link>
         </div>

      </nav>
   )
}

export default Header
