import  AlertSuccess from "./component/AlertSuccess";
import  AlertDanger from "./component/AlertDanger";
import Header from "./component/header";
import Nav from "./component/nav";
import Product from "./component/product";
import   "./dassbroad.css";
import data from "./data";
export default function App(){
    const products = data;
    
    // const bgDanger = "red";
    // const bgSuccess = "blue";
       return (
    <div className="App">
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Product  products={products}/>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
  }
        

