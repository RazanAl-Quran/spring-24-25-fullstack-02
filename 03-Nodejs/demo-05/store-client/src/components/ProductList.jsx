import { useEffect, useState } from "react";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";

const ProductList = ({ user, onCartChange }) => {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  const isAdmin = user.role === "admin";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const addToCart = async (product_id) => {
    const res = await fetch("http://localhost:5000/api/users/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, product_id }),
    });
    const data = await res.json();
    onCartChange(data.cart);
  };

  const addProduct = async (product) => {
    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-role": user.role,
      },
      body: JSON.stringify(product),
    });
    fetchProducts();
  };

  const updateProduct = async (product) => {
    await fetch(`http://localhost:5000/api/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-role": user.role,
      },
      body: JSON.stringify(product),
    });
    setEditingProductId(null);
    fetchProducts();
  };

  const deleteProduct = async (product) => {
    await fetch(`http://localhost:5000/api/products/${product.id}`, {
      method: "DELETE",
      headers: {
        "x-role": user.role,
      },
    });
    fetchProducts();
  };

  return (
    <div>
      <h2>Products</h2>

      {isAdmin && <AddProductForm onAdd={addProduct} />}

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {editingProductId === product.id ? (
              <EditProductForm
                product={product}
                onUpdate={updateProduct}
                onCancel={() => setEditingProductId(null)}
              />
            ) : (
              <>
                {product.name} - ${product.price}
                {isAdmin ? (
                  <>
                    <button onClick={() => setEditingProductId(product.id)}>Edit</button>
                    <button onClick={() => deleteProduct(product)}>Delete</button>
                  </>
                ) : (
                  <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
