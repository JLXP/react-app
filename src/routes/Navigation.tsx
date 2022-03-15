import { Suspense } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route,  Navigate, NavLink } from 'react-router-dom';
import { routes } from './routes';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import logo from '../logo.svg';
import ShoppingPage from '../02-component-pattern/pages/ShoppingPage';




//Navlink sirve para ver agregar la opcion active
export const Navigation = () => {
    //el suspense es un componente que va a envolver a todo el browserRouter
    //el suspense sirve para decirle a react que cuando estoy cargando a un modulo, espera pero haz
    //lo siguiente
  return (
    <BrowserRouter>
    <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
            <ul>
                <li>
                    <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>ShoppingPage</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                </li>
            </ul>
        </nav>


        <Routes>
            <Route path="about" element={ <h1>About Page</h1> } />
            <Route path="users" element={ <h1>Users Page</h1> } />
            <Route path="home" element={ <ShoppingPage/> } />
            
            <Route path="/*" element={ <Navigate to="/home" replace /> } />
        </Routes>

        </div>
    </BrowserRouter>
    
  )
}

