import "./ViewProducts.scss";
import ProductList from "../../components/ProductList/ProductList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { FormEvent, useState } from "react";

const ViewProducts = () => {
const [searchInput, setSearchInput] = useState<string>("");

const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchInput(input);
  };
  
return(
    <div className="view-products">
        <h3 className="view-products__title">Products I've used so far...</h3>
        <SearchBox productName="Products" searchTerm={searchInput} handleInput={handleSearchInput}/>
        {/* filtering */}
        {/* import for productsList */}
    </div>
)
}

export default ViewProducts;