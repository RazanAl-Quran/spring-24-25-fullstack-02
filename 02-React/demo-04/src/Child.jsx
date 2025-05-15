import React from 'react';

const Child = ({user}) => {
    return (
        <div>
            <p>{user.name}</p>
        </div>
    );
}

export default Child;
