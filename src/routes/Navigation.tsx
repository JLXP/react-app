import { Suspense } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { routes } from './routes';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import logo from '../logo.svg';




//Navlink sirve para ver agregar la opcion active
export const Navigation = () => {
    //el suspense es un componente que va a envolver a todo el browserRouter
    //el suspense sirve para decirle a react que cuando estoy cargando a un modulo, espera pero haz
    //lo siguiente
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {/* Crear Navlinks dinamicos*/}
                        {
                            routes.map(({to, name})=>(
                                <li key={to}>
                                    < NavLink 
                                        to={to} 
                                        className={({isActive})=> isActive ? 'nav-active':''}> 
                                        {name} 
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                        
                </nav>
                <Routes>
                    {
                        routes.map(({path, Component})=>(
                            <Route 
                            path={path} 
                            element={<Component/>}
                            />
                        ))
                    }
                    {/*Ruta que sirve para realizar un redirect */}
                    <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}

