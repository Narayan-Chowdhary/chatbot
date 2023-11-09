import { React } from "react";

export default function InputTypeColor({ identifier, onColorChange }) {
  const handleChange = (e) => {
    const color = e.target.value;
    onColorChange(color, identifier);
  };

  return <input type="color" onChange={handleChange} />;
}
