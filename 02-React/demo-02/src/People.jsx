import { useState } from "react";

function People() {

    const [username, setUsername] = useState('');
    const [height, setHeight] = useState("");
    const [favoritePet, setFavoritePet] = useState("");
    const [gender, setGender] = useState("");

    const [people, setPeople] = useState([]);

    const addPersonHandler = (e) => {
        e.preventDefault();
        const newPerson = {
            username,
            height,
            favoritePet,
            gender
        };
        // Object Property Value Shorthand

        // const newPerson = {
        //     username:username,
        //     height:height,
        //     favoritePet:favoritePet,
        //     gender:gender
        // };

        // setPeople(people.push(newPerson));
        setPeople([...people, newPerson]);

        console.log(people);




    }

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>🚀 React Form </h1>

            <h2>Add a Person</h2>

            <form onSubmit={addPersonHandler}>
                <input
                    type="text"
                    placeholder="Add your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />
                <input
                    type="text"
                    placeholder="Favorite Pet"
                    value={favoritePet}
                    onChange={(e) => setFavoritePet(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ marginLeft: "10px" }}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>

            {/* render people state */}
            <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
                {people.map((person, index) => {
                    const emoji = person.gender === "Male" ? "👨" : "👩";
                    return (
                        <li >
                            {emoji} <strong>{person.username}</strong> — Height: {person.height}, Favorite Pet: {person.favoritePet}
                        </li>
                    );
                })}
            </ul>

        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </div>

    );
}

export default People;
