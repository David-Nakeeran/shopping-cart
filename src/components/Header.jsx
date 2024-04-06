import {NavLink, Link} from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';
import loginImg from '../../public/assets/loginImg.svg';


const activeLinkStyle = (isActive) => {
    return isActive ? 'active-link' : null
}

export default function Header() {
    const {cart} = useContext(AppContext);
    


    return (
        <header>
            <nav>
                <div>
                    <NavLink to='.'
                    end
                    className={({isActive}) => activeLinkStyle(isActive)}>Home</NavLink>
                </div>
                <div className='nav-links'>
                    <NavLink to='/shop' 
                    className={({isActive}) => activeLinkStyle(isActive)}>Shop</NavLink>
                    <NavLink to='/cart' 
                    className={({isActive}) => activeLinkStyle(isActive)}>{`Cart ${cart && cart.length}`}</NavLink>
                    <Link to='/login'>
                        <img src={loginImg}
                        className='login-icon'/>
                        </Link>
                         
                </div> 
            </nav>
        </header>
    )
}