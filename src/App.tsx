import { Product } from "./components/Product";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";

import { useProducts } from "./hooks/products";
import { useState } from "react";
import { IProduct } from "./models/IProduct";

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const [ creatingProduct, setCreatingProduct ] = useState<boolean>(false);

  function createProduct(product: IProduct) {
    addProduct(product);
    
    setCreatingProduct(false);
  }

  return (
    <div className='container'>
      { error && <ErrorMessage error={error}/> }
      { loading && <Loader /> }
      { products.map((product) => <Product product={product} key={product.id} />) }

      { 
        creatingProduct && <Modal onClose={() => setCreatingProduct(false)}>  
        <CreateProduct onCreate={ createProduct }/> 
      </Modal>
      }
      <button onClick={() => setCreatingProduct(true)}>Create Product</button>
    </div>
  )
}

export default App;
