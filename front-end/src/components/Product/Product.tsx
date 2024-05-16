import ProductType from "../../types/ProductType";
import "./Product.scss";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product: productObject }: ProductProps) => {
  const {
    productName,
    brandName,
    rating,
    productType,
    keyIngredients,
  } = productObject;



  return (
    <div className="product">
      <h4 className="product__type">{productType}</h4>
      <h2 className="product__title">{productName}</h2>
      <h3 className="product__brand">By {brandName}</h3>
      <h4 className="product__rating">{rating} / 10</h4>
      <p className="product__ingredient">Key Ingredients: {keyIngredients}</p>
    </div>
  );
};

export default Product;
