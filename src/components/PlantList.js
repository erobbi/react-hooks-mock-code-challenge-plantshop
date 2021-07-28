import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList() {

  const [plantList, setPlantList] = useState([]);

  console.log(plantList)
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(json => setPlantList(json))
  },[])




  return (
    <ul className="cards">
      {
         plantList.map(potato => <PlantCard plant={potato} />)
      }
    </ul>
  );
}

export default PlantList;
