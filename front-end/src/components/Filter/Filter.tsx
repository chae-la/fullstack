import { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import Button from "../Button/Button";

type FilterProps = {
  handleChange: (filterType: string) => void;
};

const Filter = ({ handleChange }: FilterProps) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleClick = () => {
    setShowFilter(!showFilter)
  };



  return (
    <div className="filter">
      <div className="filter__button" onClick={handleClick}>
        <Button label="Filter" />
      </div>
      <div className="filter__container">
        {showFilter && (
          <div className="filter-options__container ">
            <h4 className="filter-options__heading">Type</h4>
                  <RadioButton
                    handleChange={() => handleChange("Oil-Based Cleasner")}
                    label="Oil-Based Cleasner"
                    groupName="type"
                    value="Oil-Based Cleasner"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Water-Based Cleanser")}
                    label="Water-Based Cleanser"
                    groupName="type"
                    value="Water-Based Cleanser"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Toner")}
                    label="Toner"
                    groupName="type"
                    value="Toner"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Serum")}
                    label="Serum"
                    groupName="type"
                    value="Serum"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Essence")}
                    label="Essence"
                    groupName="type"
                    value="Essence"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Moisturiser")}
                    label="Moisturiser"
                    groupName="type"
                    value="Moisturiser"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Sunscreen")}
                    label="Sunscreen"
                    groupName="type"
                    value="Sunscreen"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Lip Balm")}
                    label="Lip Balm"
                    groupName="type"
                    value="Lip Balm"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Eye Cream")}
                    label="Eye Cream"
                    groupName="type"
                    value="Eye Cream"
                  />
                  <RadioButton
                    handleChange={() => handleChange("Other")}
                    label="Other"
                    groupName="type"
                    value="Other"
                  />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
