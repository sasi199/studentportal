import React from 'react';

const Card = (props) => {
  return (
    <>
  

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-xl font-semibold">{props.title}</h2>
  </div>
  
 
</div>

    </>
  );
}

export default Card;
