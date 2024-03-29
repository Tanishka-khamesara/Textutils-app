import "./Navbar.css"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div class="nav">
            <div class="left">
                <h2 >TextUtils</h2>
                <p><NavLink to='/' className='different-style' >Home</NavLink></p>
                <p><NavLink to='/Contact'>Contact</NavLink></p>
                <p><NavLink to='/About'>About us</NavLink></p>
        </div>
        </div>
    );

}
export default Navbar;