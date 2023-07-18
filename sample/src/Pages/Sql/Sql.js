// import React from 'react'

// const mysql = require("mysql");

// const express = require("express");

// const bodyParser= require("body-parser")

// var app = express();


// app.use(bodyParser.urlencoded({ extended: true }));

// const cors = require("cors");
// // npm i cors
// app.use(cors()); // fof react class

// let mysqlConnection = mysql.createConnection({
//   user: "root",
//   password: "",
//   host: "localhost",
//   database: "iphone",
// });

// mysqlConnection.connect((err) => {
//     if (err) console.log(err);
//     else console.log("Connected to Database ");
// });

// app.listen(3001, () => {
//   console.log("listning to port 1234");
// });

// // for react class
// app.get("/iphones", (req, res) => {
//     mysqlConnection.query(
//       "SELECT * FROM products ",
//       (err, rows) => {
//         let iphones = { products: [] };
//         iphones.products = rows;
//         var stringIphones = JSON.stringify(iphones);
//           if (!err) {
//               console.log(rows)
//               res.json(rows);
//           }
//         else console.log(err);
//       }
//     );
// });




// return (
   
//       <section className="internal-page-wrapper top-100">
        
//         The best for the brightest.
    

//           {products.map((product) => {
//             let id = product.product_url;
//             let title = product.product_name;
//             let img = product.product_img;
//             let Brief = product.product_brief_description;
//             let StartPrice = product.starting_price;
//             let PriceRange = product.price_range;
//             let productPage = "/iphone/" + id;


//             let productDiv = (
//               <div key={id}>
//                 <div >
//                   <div className="title">{title}</div>
//                   <div className="brief">{Brief}</div>
//                   <div className="starting-price">
//                     {`Starting at ${StartPrice}`}
//                   </div>
//                   <div className="monthly-price">{PriceRange}</div>
//                   <div className="links">
//                     <ul>
//                       <li>
//                         <Link to={productPage}>Learn more</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div >
//                   <div className="prodict-image">
//                     <img src={img} alt="" />
//                   </div>
//                 </div>
//               </div>
//             );
//             return productDiv;
//           })}
    
//       </section>
 
//   );
// }
// export default Iphone;












