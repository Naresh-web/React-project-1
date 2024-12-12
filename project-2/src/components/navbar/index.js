import react from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/products'>Prodcuts</NavLink>
            </nav>
        </>
    )
}
export default NavLinks;