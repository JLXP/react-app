import { useState } from "react";
import  { ProductCard,ProductButtons, ProductImage, ProductTitle } from "../components/";
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';

//Estos son los productos
const product1 = {
    id:'1',
    title:' Coffe Mug - Card',
    img: './coffee-mug.png'
  
}

const product2 = {
  id:'2',
  title:' Coffe Mug - meme',
  img: './coffee-mug2.png'

}

//array de productos
const products: Product[] = [ product1,product2 ];


interface ProductInCart extends Product{
  count:number
}

const ShoppingPage = () => {
  /*el shoppingcart no es mas que un objeto que tiene las llaves y la cantidad
    tiene el id, el producto y la cantidad
  */
 //Maneja un objeto y dentro x cantidad de llaves y los valores de ese objeto 
 //lucen tipo Product in Cart
  type cart = {[key:string | number]: ProductInCart}
    
  const [shoppingCart, setShoppingCart] = useState< cart >();

  const onProductCountChange = ({count, product}:{count:number, product:Product}) => {
    console.log('prueb');
  }

  return (
    <div style={{
    }}>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap'
        }}>
          {
            products.map(product =>(
              <ProductCard 
              key={product.id} 
              product={ product } 
              className="bg-dark"
              onChange={(evento)=>onProductCountChange(evento)}>
                  <ProductImage className="custom-image"/>
                  <ProductTitle className="text-white text-bold"/>
                  <ProductButtons className="custom-buttons"/>
              </ProductCard>
            ))
          }
          
          
          {/*<ProductCard product={ product1 } className="bg-dark">
            {/*Este es el children  que recibe product card}
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title title={'Cafe'} className="text-white text-bold" />
            <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>*/}       
        </div>

        <div className="shopping-cart">

          <ProductCard product={ product2 } className="bg-dark" style={{
            width:'100px'       
          }}
          onChange={(evento)=>onProductCountChange(evento)}
          >
            <ProductImage className="custom-image"/>
          
            <ProductButtons className="custom-buttons"/>
          </ProductCard>

          <ProductCard product={ product1 } className="bg-dark" style={{
            width:'100px'
          }}>
            <ProductImage className="custom-image"/>
          
            <ProductButtons className="custom-buttons"/>
          </ProductCard>
          
        </div>
    </div>
    
  )
}


export default ShoppingPage


