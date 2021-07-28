import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function NewPlantForm() {

  // need to pass new plant up to plantPage and then down to PlantCard (render)
  // define state of form up here
  // using one hook is better, but three would be easier (per adam)
  const [formData, formDataSetter] = useState({
    name: "",
    image: "", //this will be a string of the link
    price: "",
  })

  function manageFormData(e) {
    let name = e.target.name
    let value = e.target.value

    formDataSetter({
      ...formData,
      [name]: value
    })
  }

  // capture submitted data and store in a separate state
  const [submittedData, submittedDataSetter] = useState([])

  // call to handle onSubmit behavior in the controlled form
  function handleSumbmit(e) {
    console.log ("handlesubmit hello")
    e.preventDefault()
    //capture submitted data
    const newformData = {name: formData, image: formData.image, price: formData.price}

    submittedDataSetter([...submittedData, newformData])

    // clearing out the form fields
    formDataSetter({
      ...formData,
      name: "",
      image: "",
      price: ""
    })
})

  return (

    // returing a card at bottom of page
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={manageFormData} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={manageFormData}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={manageFormData}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
