import React, { useReducer } from 'react';
import Child from './Child';

const Parent = ({user}) => {
    return (
        <div>
            <Child user={user}/>
        </div>
    );
}

export default Parent;
