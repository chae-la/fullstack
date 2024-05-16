import "./CreateProduct.scss";
import Form from "../../components/Form/Form";
import ProductType from "../../types/ProductType";

const CreateProduct = () => {
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
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultProduct = {
    id: -1,
    productName: "",
    brand: {brandName: ""},
    concerns: "",
    keyIngredients: "",
    productType: "",
    img: "",
    rating: 0,
  };
  return (
    <div className="create-product">
      <h2>Add a Product</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultProduct={defaultProduct}
        formLabel="Add A New Product!"
      />
    </div>
  );
};

export default CreateProduct;
