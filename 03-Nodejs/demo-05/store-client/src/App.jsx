import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      fetch(`http://localhost:5000/api/users/cart/${userData.email}`)
        .then((res) => res.json())
        .then((data) => setCart(data));
    }
  }, []);


  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // persist user
    fetch(`http://localhost:5000/api/users/cart/${userData.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setCart([]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🛍️ Simple Store (PostgreSQL)</h1>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <p>Welcome, {user.email} ({user.role})</p>
          <br />
          <button onClick={handleLogout}>Logout</button>
          <ProductList user={user} onCartChange={setCart} />
          <Cart cart={cart} />
        </>
      )}
    </div>
  );
};

export default App;
