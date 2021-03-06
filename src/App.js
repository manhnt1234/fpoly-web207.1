import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./component/header";
import Nav from "./component/nav";
import Product from "./component/product";
import "./dashboard.css";
import data from "./data";
export default function App() {
  // const products = data;
  const [products, setProducts] = useState(data);
 function onHandleRemove(id){
   console.log("App.js", id)
   const newProduct =  products.filter((item) => item.id !== id);
   console.log(newProduct);
 }
  return (
    <div className="App">
       <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Product products={products} onRemove={onHandleRemove} />
            </main>
          </div>
        </div>
    </div>
    </div>
  );
}

