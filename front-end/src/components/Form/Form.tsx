import { FormEvent, useState } from "react";
import ProductType from "../../types/ProductType"
import "./Form.scss"

type FormProps = {
    defaultProduct: ProductType;
    formLabel: string;
    handleSubmit: (product: ProductType) => void;
}

const Form = ({ defaultProduct, formLabel, handleSubmit }: FormProps) => {
    const [product, setProduct] = useState<ProductType>(defaultProduct);

    const handleInput = (event: FormEvent<HTMLInputElement>, key: string) => 
        setProduct({ ...product, [key]: event.currentTarget.value }); 

    const handleValidation = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (Object.values(product).some(value => !value)) {
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
                    className="form__input"
                    type="text"
                    placeholder="Product Image"
                    value={product.img}
                    onChange={event => handleInput(event, "img")}
                />
                <input
                    className="form__input"
                    type="text"
                    placeholder="Product Name"
                    value={product.productName}
                    onChange={event => handleInput(event, "productName")}
                />
                <input
                    className="form__input"
                    type="text"
                    placeholder="Brand Name"
                    value={product.brandName}
                    onChange={event => handleInput(event, "brandName")}
                />
                <input
                    className="form__input"
                    type="text"
                    placeholder="Concerns"
                    value={product.concerns}
                    onChange={event => handleInput(event, "concerns")}
                />
                <input
                    className="form__input"
                    type="text"
                    placeholder="Rating"
                    value={product.rating}
                    onChange={event => handleInput(event, "rating")}
                />
                <input
                    className="form__input"
                    type="text"
                    placeholder="Key Ingredients"
                    value={product.keyIngredients}
                    onChange={event => handleInput(event, "keyIngredients")}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
