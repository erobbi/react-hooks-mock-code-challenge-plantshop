import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  return (
    <div className="app">

      <Header />
      <PlantPage />
    </div>
  );
}

export default App;



// 1) DONE When the app starts, I can see all plants.
//      fetch plants
//      render all plant cards
// 
// 2) ALMOST DONE...DOES NOT RENDER YET I can add a new plant to the page by submitting the form.
//      post request to server?
// 3) DONE I can mark a plant as "sold out".
//      not sure, yet. probably add boolean to in stock button re-rendering with filter
// 4) I can search for plants by their name and see a filtered list of plants.
//      use filter with a  broader useEffect
