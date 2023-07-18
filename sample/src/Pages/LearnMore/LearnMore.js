import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LearnMore(props) {
  const [products, setProducts] = useState([]);
  
  const { pUrl } = useParams();
  console.log(pUrl)
  

  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((res) => res.json())
      .then((products) => {
        const filterd = products.filter(
          (product) => product.product_url === pUrl
        );
        // console.log(filterd);
        setProducts(() => filterd);
      });
  }, [pUrl]);

  // console.log(products);

  // console.log(pid)

  return (
  
    <div>
      {products.map((singleVideo) => {
        let pid = "/iphone/" + singleVideo.singleVideo_id;
        let url = singleVideo.product_url;
        let title = singleVideo.product_name;
        let img = singleVideo.product_img;
        let Brief = singleVideo.product_brief_description;
        let StartPrice = singleVideo.starting_price;
        let PriceRange = singleVideo.price_range;

        console.log(url);

        let videoWrapper = (
          <div key={pid}>
            <section className="internal-page-wrapper top-100">
              <div className="outer-wraper">
                <div className="all-wraper">
                  <div className="title">{title}</div>
                  <div className="brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                </div>

                <div>
                  <div className="product-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
        return videoWrapper;
      })}
    </div>
  );
}

export default LearnMore;
