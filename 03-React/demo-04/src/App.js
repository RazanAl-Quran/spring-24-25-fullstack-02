import { useEffect, useState } from "react";
import axios from 'axios';
import Parent from "./Parent";

function App() {
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const user = { name: "Razan", role: "Instructor" };


  // mounting
  useEffect(() => {
    axios("https://digimon-api.vercel.app/api/digimon")
      .then((digimons) => {
        // console.log(digimons.data); 
        setDigimons(digimons.data.slice(0, 10)); // get just the first 10 for display
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
        setLoading(false);
      });
  }, []); // empty dependency array = run only once on mount

  if (loading) return <p>🔄 Loading Digimon...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (

    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🐉 Digimon Characters</h1>  
        <ul style={{ listStyle: "none", padding: 0 }}>
          {digimons.map((digimon, index) => (
            <li key={index}>
              <strong>{digimon.name}</strong> — {digimon.level}
              <br />
              <img src={digimon.img} alt={digimon.name} width="100" />
            </li>
          ))}
        </ul>

        <Parent user ={user} digmons={digimons}/>
    </div>

    
  );
}

export default App;
