
import { Props as ProductCardProps} from '../components/ProductCard'
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

//Aqui se limitan 
export interface Product{
    id: string;
    title: string;
    img?: string;
}

  //esta es la informacion que recibe el context
  //Esto es lo que hace de manera global para pueda ser consultada
export interface ProductContextProps {
    counter:number;
    increaseBy: (value:number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    /*No es importante si no esta recibiendo el classname
    los recibe directo de los componentes
    */ 
    ({ children, product }: ProductCardProps):JSX.Element,
    Title: (Props : ProductTitleProps) => JSX.Element,
    Image:(Props: ProductImageProps) => JSX.Element,
    Buttons: (Props:ProductButtonsProps) => JSX.Element
}


export interface onChangeArgs {
    product:Product;
    count:number;
}