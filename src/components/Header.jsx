import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <div>
                <Link to='/'>Home</Link>
                </div>
                <Link to='/shop'>Shop</Link>
                <Link to='/cart'>Cart</Link>
            </nav>
        </header>
    )
}