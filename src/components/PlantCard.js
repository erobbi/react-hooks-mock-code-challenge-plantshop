import React, {useState, useEffect} from "react";

function PlantCard({plant: {name, image, price}}) {
  // add logic here of instock/out of stock? NO. pass it up to App and 
  // false = out of stock
  const [outOfStock, setOutOfStock] = useState(true)

  function handleStock(name) {
    setOutOfStock(!outOfStock)
  }
  console.log(outOfStock)
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {outOfStock ? (
        <button  onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
