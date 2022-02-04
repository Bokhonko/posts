import React, { useState } from 'react';

export const Counter = () => {
    const [likes, setLikes] = useState(0)
    const plus = () => {
        setLikes(likes + 1)
    }
    const minus = () => {
        setLikes(likes - 1)
    }
  return (
   <div>
       <h1>{likes}</h1>
       <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
   </div>
  )
};
  
