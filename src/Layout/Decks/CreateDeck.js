import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm"; //use DeckForm as the reusable component
import { createDeck } from "../../utils/api/index";

//Create deck has a path in index.js
function CreateDeck() {

//the form is shown with the appropriate fiels for creating a new deck 
  //the name field is an <input> field
  //the description frield is a <textarea> field that can be multiple line text 
  //we have the initial form state 
  const initialFormState = {
        name: "",
        description: ""
    };
  //state variable called FormData which will hold the new deck
    const [formData, setFormData] = useState({...initialFormState})
    const history = useHistory();

    //set form data with change handler
    //updates the change
    //spread operator: overwrite the formData
    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    //create new deck with submit handler
    //what does try and catch do ?
      //async function to work like a sync function 
    //createDeck(formData) //formData is our deck 
    const handleSubmit = (event) => {
        event.preventDefault();
    //newDeck.id 
       //new deck is the deck with create 
        async function deckCreate() {
            try {
                const newDeck = await createDeck(formData);
                history.push(`/decks/${newDeck.id}`);
            } catch (error) {
                if (error ===!"AbortError") { //if hte error doesn't equal abort error, throw error
                    throw error;
                }
            }
        }
        deckCreate(); //invoke the function 
    }

    return (
        <div>
            <div> 
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Create Deck
                    </li>
                </ol>
            </nav>
                <h1>Create Deck</h1>
                        <DeckForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
                        <Link to="/"><button className="btn btn-secondary mr-1">Cancel</button></Link> 
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
        </div>
    )
}

export default CreateDeck;