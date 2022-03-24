import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product:Product;
  onChange?: (args: onChangeArgs) => void;
}

//Esta funcion solo admite ciertos datos
export const useProduct = ({onChange, product}: useProductArgs) =>{

  
  const [counter, setCounter] = useState(0);

  //aqui ya entra la parte de typescript en donde limitamos y le decimos que valor 
  //quiere por defecto
  const increaseBy = ( value:number )=> {
      // El valor prev es un valor que se tenia
      const newValue = Math.max(counter + value,0);

      setCounter( newValue );

      onChange && onChange({ count : newValue, product });
      
  }
  return {counter,increaseBy};
}

