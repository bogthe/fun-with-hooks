import React, { useState } from 'react';

/**
 * Notes:
 * - useState always replaces state instead of merging it. 
 * - useState(prevState => newState) <- also has a method for describing how state changes!
 */
export const Counter = () => {
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
};
