import "./ViewProducts.scss";
import ProductList from "../../components/ProductList/ProductList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEvent, useEffect, useState } from "react";
import ProductType from "../../types/ProductType";

const ViewProducts = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
        const input = event.currentTarget.value.toLowerCase();
        setSearchInput(input);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await fetch("http://localhost:8080/products");
                if (!result.ok) {
                    throw new Error("Error Loading Products :( Try Again Later");
                }
                const productData = await result.json();
                setProducts(productData);
                setLoading(false);
            } catch (error) {
                console.error("Error Loading products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="view-products">
            <h3 className="view-products__title">Products I've used so far...</h3>
            <SearchBox productName="Products" searchTerm={searchInput} handleInput={handleSearchInput} />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
};

export default ViewProducts;
