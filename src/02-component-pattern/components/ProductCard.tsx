import { createContext} from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';





/*Esto se hace por que en el props podemos enviarle muchas mas cosas
  si no lo hacemos asi lo que pasara es que solo podemos consultar props
*/
//Esto es lo que recibe desde el padre

//Se importa desde interfaces por que solamente se va a usar en la parte de product card
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({children,product}:ProductCardProps) => {
  
  const { counter, increaseBy} = useProduct();

  /*Se declara el provider para que posteriormente este pueda compartir la informacion
  con todos los hijo*/
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={styles.productCard}>
        {children}   
        {/* Se separo todo en pequeños components */}
        {/*<ProductImage img={product.img}/>
            <ProductTitle title={product.title}/>
            <ProductButtons 
            increaseBy={increaseBy}
            counter={counter}
        />*/}
      </div>
    </Provider>
  )
}
 
/*Esto se hace con el fin de ya no meter todas las clases de forma sencilla
sino de que parezcan que son hijas*/
/*ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;*/