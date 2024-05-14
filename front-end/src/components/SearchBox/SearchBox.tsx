import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  productName: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ productName, searchTerm, handleInput }: SearchBoxProps) => {
  return (
    <div className="search-box">
      <input
        placeholder="Search"
        type="text"
        name={productName}
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </div>
  );
};

export default SearchBox;