import { createContext } from 'react';
import {  onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';


//Se importa desde interfaces por que solamente se va a usar en la parte de product card
export const ProductContext = createContext({} as ProductContextProps);

/* Siempre se extrae el provider y este despues envuelve al div para 
que la informacion pueda ser consultada
*/
const { Provider } = ProductContext;

/* Esta interface se encuentra aqui por que es mejor tener la principal en el componente */
export interface Props{
  product: Product;
  //el children es toda la lista de componentes
  children?: React.ReactElement | React.ReactElement[];
  //lo unico que se utilizo para usar los estilos fue el className
  className?: string;
  //esta parte del style es para poder agregar estilos
  style?: React.CSSProperties;

  onChange?: ( args: onChangeArgs) => void;
}

export const ProductCard = ({children,product,className,style, onChange}:Props) => {
  
  /*Cuando realizamos una devolucion de datos siempre retornamos
  la funcion y el resultado*/
  const { counter, increaseBy} = useProduct({onChange, product});

  /*Se declara el provider para que posteriormente este pueda compartir la informacion
  con todos los hijo*/
  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div 
      className={`${ styles.productCard} ${className}`}
      style={style}
      >
        {/* Se separo todo en pequeños components */}
        {children}   
        
      </div>
    </Provider>
  )
}