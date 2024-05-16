import { useEffect, useState } from "react";
import ProductType from "../../types/ProductType";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";


const EditProduct = ({ productId }: { productId: ProductType }) => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(productId);
  }, [productId]);

  const getProductById = async (id: ProductType) => {
    const result = await fetch(`http://localhost:8080/product/${id}`);
    const productData = await result.json();
    setProduct(productData);
  };

  const handleUpdate = async ( updateProduct: ProductType) => {
    const result = await fetch(`http://localhost:8080/product/${updateProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
    if (result.ok) {
      alert("Product Information updated");
      const updated = await result.json();
      setProduct(updated);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDelete = async () => {
    const result = await fetch(`http://localhost:8080/product/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      alert("Product Deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(true);


  return (
    <div className="edit">
      <h2 className="edit__title">Edit A Product</h2>
      <div className="edit__container">
        <div className="edit__edit-button" onClick={handleShowForm}>
          <Button label="Edit" />
        </div>
        <div className="edit__delete-button" onClick={handleDelete}>
          <Button label="Delete" />
        </div>
      </div>
      {showForm && product && (
        <>
          <Form defaultProduct={product} handleSubmit={handleUpdate} formLabel="Update"/>
          <Button label="Save" />
        
        </>
      )}
    </div>
  );
};

export default EditProduct;

