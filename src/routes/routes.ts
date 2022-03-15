import { lazy,LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
//import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/pages";

//Esto se inicializa un proyecto nuevo
type JSXComponent = () => JSX.Element;

//Al estar manejando typescript es necesario declarar la interface
//el jsx no es mas que codigo html con javascript
interface Route{
    to: string;
    path: string;
    //Se hace de esta manera por que se utiliza el lazyload
    Component:LazyExoticComponent<JSXComponent>|JSXComponent;
    name: string;
}

const LazyLayout = lazy(()=> import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));


//Aqui limitamos las rutas por un typescript
export const routes:Route[] = [
    {
        //Todas las rutas que sean procesadas hijas deberan de pasar por el /lazyload/*
        //Lazyload es parte de la ruta y todo lo que venga despues sera procesado por este
        to: '/lazyload/',
        path:'/lazyload/*',
        Component: LazyLayout,
        name:'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name:'No Lazy'
    },
];