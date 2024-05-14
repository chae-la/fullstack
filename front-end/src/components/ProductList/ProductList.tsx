import "./ProductList.scss"
import Product from "../Product/Product"

const ProductList = () => {
return(
    <div className="product-list">
        <Product product={{
            id: 0,
            img: "",
            productName: "Lip Care Therapy",
            brandName: "Vaseline",
            rating: 7,
            concerns: ["Dry Lips", "Cracked Lips"],
            typeOfProduct: "lip balm",
            keyIngredients: ["niacinamide", "octocrylene"]
        }} />
    </div>
)

}

export default ProductList;

// {products.map((product) => {
//     <Link key={product.id} to={`/product/edit.${product.id}`}>
//         <Product product={product}/>
//     </Link>
// })}
// }} />