import { FormEvent, useState } from "react";
import ProductType from "../../types/ProductType"
import "./Form.scss"

type FormProps = {
    defaultProduct: ProductType;
    formLabel: string;
    handleSubmit: (product: ProductType) => void;
}

const Form = ({defaultProduct, formLabel, handleSubmit} : FormProps) => {
    
const [product, setProduct] = useState<ProductType>(defaultProduct);

const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
}

if (Object.values(product).some(value => !value)) {
    alert("Missing content, unable to proceed");
    return;
  }

  handleSubmit(product);
};

const handleInput = (event: FormEvent<HTMLInputElement>, key: string) => 
    setProduct({...product, [key]: event.currentTarget,value}); 


    return(
        <div className="form">
            <h3 className="form__title">{formLabel}</h3>
            <form className="form__form" onSubmit={handleSubmit}>
                <input
                className="form__input"
                type="text"
                placeholder="Product Image"
                value={product.img}
                onInput={event => handleInput(event, "img")}
                />
                <input
                className="form__input"
                type="text"
                placeholder="Product Name"
                value={defaultProduct.productName}
                onInput={event => handleInput(event, "productName")}
                />
                <input
                className="form__input"
                type="text"
                placeholder="Brand Name"
                value={defaultProduct.brandName}
                onInput={event => handleInput(event, "brandName")}
                />
                <input
                className="form__input"
                type="text"
                placeholder="Concerns"
                value={defaultProduct.concerns}
                onInput={event => handleInput(event, "concerns")}
                />
                <input
                className="form__input"
                type="text"
                placeholder="Rating"
                value={defaultProduct.rating}
                onInput={event => handleInput(event, "rating")}
                />
                <input
                className="form__input"
                type="text"
                placeholder="Key Ingredients"
                value={defaultProduct.keyIngredients}
                onInput={event => handleInput(event, "keyIngredients")}
                />
            
            </form>
        </div>
    )


export default Form;