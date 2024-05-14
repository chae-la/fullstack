import "./Nav.scss"
import { Link } from "react-router-dom";

const Nav = () => {
return(
    <div className="nav">
        <Link className="nav__link" to="/">Home</Link>
        <Link className="nav__link" to="/products">Products</Link>
        <Link className="nav__link" to="/new-product">Add a Product</Link>
    </div>
)
}

export default Nav;