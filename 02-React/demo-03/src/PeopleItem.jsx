function PeopleItem({ person }) {
    const emoji = person.gender === "Male" ? "👨" : "👩";
    return (
      <li>
        {emoji} <strong>{person.username}</strong> — Height: {person.height}, Favorite Pet: {person.favoritePet}
      </li>
    );
  }
  
  export default PeopleItem;
  