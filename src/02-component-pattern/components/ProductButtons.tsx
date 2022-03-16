/*interface ProductButtonsProps{
    increaseBy: (value:number) => void;
    counter: number;
}*/

import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {

    //export const ProductButtons = ({increaseBy,counter}:ProductButtonsProps) => {
    
        const {increaseBy,counter} = useContext(ProductContext);
    
        return (
          <div className={styles.buttonsContainer}>
            <button
              className={styles.buttonMinus}
              onClick={()=>increaseBy(-1)}
              >-</button>
            <button
              className={styles.countLabel}>{counter}</button>
            <button
              className={styles.buttonAdd}
              onClick={()=>increaseBy(+1)}
              >+</button>
          </div>
        );
    }