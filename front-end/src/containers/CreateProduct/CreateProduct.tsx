import "./CreateProduct.scss";
import Form from "../../components/Form/Form";
import ProductType from "../../types/ProductType";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const handleSubmit = async (product: ProductType) => {
    const result = await fetch("http://localhost:8080/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (result.ok) {
      alert("Product Created");
      navigate("/products")
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultProduct = {
    id: -1,
    productName: "",
    brandName: "",
    keyIngredients: "",
    productType: "",
    rating: 0,
  };
  return (
    <div className="create-product">
      <Form
        handleSubmit={handleSubmit}
        defaultProduct={defaultProduct}
        formLabel="Add A New Product!"
      />
    </div>
  );
};

export default CreateProduct;
