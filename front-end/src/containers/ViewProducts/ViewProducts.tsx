import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Filter from "../../components/Filter/Filter";
import ProductType from "../../types/ProductType";
import "./ViewProducts.scss";

const ViewProducts = () => {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProducts = async () => {
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

    getProducts();
  }, []);

  useEffect(() => {
    applyFilter();
  }, [selectedFilter, products]);

  const handleFilterChange = (filterType: string) => {
    if (selectedFilter.includes(filterType)) {
      setSelectedFilter(selectedFilter.filter((filter) => filter !== filterType));
    } else {
      setSelectedFilter([...selectedFilter, filterType]);
    }
  };

  const applyFilter = () => {
    let filtered = [...products];
    selectedFilter.forEach((filter) => {
      filtered = filtered.filter((product) => product.productType === filter);
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="view-products">
      <h3 className="view-products__title">Products I've used so far...</h3>
      <div className="view-products__container">
        <Filter handleChange={handleFilterChange} />
      {loading ? <p>Loading...</p> : <ProductList products={filteredProducts} />}
      </div>
      
    </div>
  );
};

export default ViewProducts;
