import { FormEvent, useState } from "react";
import ProductType from "../../types/ProductType";
import "./Form.scss";
import Button from "../Button/Button";

type FormProps = {
  defaultProduct: ProductType;
  formLabel: string;
  handleSubmit: (product: ProductType) => void;
};

const Form = ({ defaultProduct, formLabel, handleSubmit }: FormProps) => {
  const [product, setProduct] = useState<ProductType>(defaultProduct);

  const handleInput = (key: string, value: string | string[] | number ) =>
    setProduct({ ...product, [key]: value });

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(product).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }
    handleSubmit(product);
  };

  return (
    <div className="form">
      <h3 className="form__title">{formLabel}</h3>
      <form className="form__form" onSubmit={handleValidation}>
        <input
          className="form__form form__form--input"
          type="text"
          placeholder="Product Name"
          value={product.productName}
          onChange={(event) => handleInput("productName", event.target.value)}
        />
        <input
          className="form__form form__form--input"
          type="text"
          placeholder="Brand Name"
          value={product.brandName}
          onChange={(event) => handleInput("brandName", event.target.value)}
        />
        <input
          className="form__form form__form--input"
          type="text"
          placeholder="Rating"
          value={product.rating}
          onChange={(event) => handleInput("rating", event.target.value)}
        />
        <textarea
          className="form__form form__form--input"
          placeholder="Key Ingredients"
          value={product.keyIngredients} 
          onChange={(event) =>
            handleInput("keyIngredients", event.target.value)
          }
        />
        <select
          className="form__form form__form--input"
          value={product.productType}
          onChange={(event) => handleInput("productType", event.target.value)}
        >
          <option value="">Select Product Type</option>
          <option value="Oil-based Cleanswer">Oil-Based Cleasner</option>
          <option value="Water-Based Cleanser">Water-Based Cleanser</option>
          <option value="Toner">Toner</option>
          <option value="Serum">Serum</option>
          <option value="Essence">Essence</option>
          <option value="Moisturiser">Moisturiser</option>
          <option value="Sunscreen">Sunscreen</option>
          <option value="Lip Balm">Lip Balm</option>
          <option value="Eye Cream">Eye Cream</option>
          <option value="Other">Other</option>
        </select>
        <Button label="Submit"/>
      </form>
    </div>
  );
};

export default Form;