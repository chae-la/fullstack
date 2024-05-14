import { ChangeEventHandler } from "react";
import "./RadioButton.scss";

type RadioButtonProps = {
  label: string;
  value: any;
  groupName: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const RadioButton = ({
  label,
  value,
  groupName,
  handleChange,
}: RadioButtonProps) => {
  return (
    <div className="radio-button">
      <input
        onChange={handleChange}
        className="radio-button__input"
        type="checkbox"
        id={label}
        name={groupName}
        value={value}
      />
      <label className="radio-button__label" htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;