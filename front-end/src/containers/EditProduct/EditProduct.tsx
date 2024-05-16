import { useEffect, useState } from "react";
import ProductType from "../../types/ProductType";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";

const EditProduct = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductByID = async () => {
    const result = await fetch(`http://localhost:8080/product/${id}`);
    const productData = await result.json();
    setProduct(productData);
  };

  useEffect(() => {
    if (id) {
      getProductByID();
    }
  }, [id]);

  const handleUpdate = async (updateProduct: ProductType) => {
    const result = await fetch(`http://localhost:8080/product/${id}`, {
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
    const result = await fetch(`http://localhost:8080/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      alert("Product Deleted");
      navigate("/products");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  console.log(handleShowForm);
  console.log(showForm);

  return (
    <div className="edit">
      <h2 className="edit__title">Edit A Product</h2>
      <div className="edit__container">
        <button
          className={
            showForm ? "edit__edit-button" : "edit__edit-button--secondary"
          }
          onClick={handleShowForm}
        >
          Update
        </button>

        <button
          className="edit__edit-button edit__edit-button--secondary"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      {showForm && product && (
        <Form
          handleSubmit={handleUpdate}
          formLabel="Update"
          defaultProduct={product}
        />
      )}
    </div>
  );
};

export default EditProduct;
