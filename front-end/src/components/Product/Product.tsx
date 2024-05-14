import ProductType from "../../types/ProductType"
import "./Product.scss"

type ProductProps = {
 product: ProductType;
}

const Product = ({product: productObject} : ProductProps) => {
    const {img, productName, brandName, rating, concerns, typeOfProduct, keyIngredients} = productObject;

    const formattedArr = concerns.join(", ")
    
    return(
        <div className="product">
            <img className="product__img" src={img}></img>
            <h4 className="product__type">{typeOfProduct}</h4>
        <h2 className="product__title">{productName}</h2>
        <h3 className="product__brand">By {brandName}</h3>
        <h4 className="product__rating">{rating} / 10</h4>
        <p className="product__concerns">Best for {formattedArr}</p>
        <p className="product__ingredient">Key Ingredients: </p>
        <ul className="product__ingredient product_ingredient--list">
            {keyIngredients.map((ingredient, index) => (
                <li key={index} className="product__ingredient product_ingredient--list">{ingredient}</li>
            ))}
        </ul>
        </div>
    )
}

export default Product;