import "./ProductList.scss";
import Product from "../Product/Product";
import ProductType from "../../types/ProductType";
import { Link } from "react-router-dom";

type ProductListProps = {
    products: ProductType[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="product-list">
            {products.map((product) => ( 
                <Link key={product.id} to={`/product/${product.id}`}> 
                    <Product product={product} />
                </Link>
            ))}
        </div>
    );
}

export default ProductList;