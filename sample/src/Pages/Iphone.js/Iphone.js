import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./iphone.css";
// import LearnMore from '../LearnMore/LearnMore'

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((res) => res.json())
      .then((pro) => {
        setProducts(() => pro);
      });
  }, []);
    
  // console.log(product`s)
    

  return (
    <section className="internal-page-wrapper top-100">
          <div className="all-title">The best for the brightest.</div>
          
          {products.map((product) => {
          // let pid = "/iphone/" + product.product_id;
        let url = product.product_url; //iphonese
        let title = product.product_name;
        let img = product.product_img;
        let Brief = product.product_brief_description;
        let StartPrice = product.starting_price;
        let PriceRange = product.price_range;
        // let productPage = "/iphone/" + url;
              // const propsData = { pid, url, title, img, Brief, StartPrice, PriceRange }
            //   console.log(propsData)

            {console.log("url " + url)}
                           
              let productDiv = (
                  <div key={url} className="outer-wraper">                     
                      
                      {/* <LearnMore value={propsData}/> */}
                      

                  <div className="all-wraper">
                    <div className="title">{title}</div>
                    <div className="brief">{Brief}</div>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="links">
                      <ul>
                        <li>
                          <Link to={url}>Learn more</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="product-image">
                      <img src={img} alt="" />
                    </div>
                  </div>
                </div>
              );
        return productDiv;
      })}
    </section>
  );
}
export default Iphone;
// export const MyContext = React.createContext();