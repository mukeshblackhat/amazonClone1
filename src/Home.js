import React from 'react';
import "./Home.css";
import Product from "./Product";


function Home() {
   return (
      <div className="home">
       <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt=""
       />

       {/* bunch of products with id ,title,rating,image */}
       <div className="home_row">
         <Product 
           id="123423143"
           title="the lean Startup : How constant Innovation creates redically success to your feet "
           price={11.96}
           rating={5}
           image="https://m.media-amazon.com/images/I/81RCff1NpnL._AC_UY218_.jpg"
         />
         <Product 
           id="123423143"
           title="Likho in pen se to tumhara jee nikar jaega so ab ki baar air 1 is pen se "
           price={11.96}
           rating={5}
           image="https://images-eu.ssl-images-amazon.com/images/I/51AqdEZ72KL._AC_SX184_.jpg"
         />
       </div>
       <div className="home_row">
       <Product 
           id="123423143"
           title="Mi Smart watch is to make your life more smart lets go "
           price={1201.96}
           rating={4}
           image="https://images-eu.ssl-images-amazon.com/images/I/41TXCe7NGML._AC_SX184_.jpg"
         />
          <Product 
           id="123423143"
           title="boAt Airopes 121v2 TWS Earbuds with BLue... Boat "
           price={1111.96}
           rating={3}
           image="https://images-eu.ssl-images-amazon.com/images/I/41ofnTFivnL._AC_SX184_.jpg"
         />
          <Product 
           id="123423143"
           title="boAt ke wireless headphn pao taro se ab chutkara na are na kate "
           price={10001.96}
           rating={5}
           image="https://images-eu.ssl-images-amazon.com/images/I/315vj6oj-FL._AC_SX184_.jpg"
         />
       </div>
      <div className="home_row">
      <Product 
           id="123423143"
           title="Samsung ki bari tv pe bare maje ab sabke sath dekho maje se bari screen pe aur enjoy karo sabke sath "
           price={1100000.96}
           rating={5}
           image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
         />
      </div>

       
      </div>
   )
}

export default Home
