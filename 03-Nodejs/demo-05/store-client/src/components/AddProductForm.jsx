import { useState } from "react";

const AddProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name: formData.name, price: parseInt(formData.price) });
    setFormData({ name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <button type="submit">+ Add Product</button>
    </form>
  );
};

export default AddProductForm;
