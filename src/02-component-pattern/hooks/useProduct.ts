import { useState } from "react";

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  //aqui ya entra la parte de typescript en donde limitamos y le decimos que valor 
  //quiere por defecto
  const increaseBy = ( value:number )=> {
      setCounter( prev => Math.max(prev + value,0));
  }
  return {counter,increaseBy};
}

