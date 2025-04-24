import React from 'react';
import PeopleItem from './PeopleItem';

function PeopleList(props) {
    return (
        <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
            {props.people.map((person, index) => (
                <PeopleItem key={index} person={person} />
            ))}
        </ul>
    );
}

export default PeopleList;
