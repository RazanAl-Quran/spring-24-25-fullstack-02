import { useEffect, useState } from "react";

function Digimon() {
    const [digimons, setDigimons] = useState([]);
    const [loading, setLoading] = useState(true);


    // mounting
    useEffect(() => {
        fetch("https://digimon-api.vercel.app/api/digimon")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch Digimon data");
                }
                return response.json();
            })
            .then((data) => {
                setDigimons(data.slice(0, 10)); // get just the first 10 for display
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, []); // empty dependency array = run only once on mount

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h1>🐉 Digimon Characters</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {digimons.map((digimon, index) => (
                        <li key={index}>
                            <strong>{digimon.name}</strong> — {digimon.level}
                            <br />
                            <img src={digimon.img} alt={digimon.name} width="100" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Digimon;
