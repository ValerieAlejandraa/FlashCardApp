import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm"; //import our resuable fomr
import { readDeck, updateDeck } from "../../utils/api/index";

//add this component to index.js
   //decks/:deckId/edit


function EditDeck() {


    const initialFormState = {
        name: "",
        description: ""
    };

    const [deck, setDeck] = useState({...initialFormState});
    const history = useHistory();
    const { deckId } = useParams(); //deckId from the url 

    useEffect(() => {
        async function loadDeck() {
            try {
                const loadedDeck = await readDeck(deckId); //use readDeck() to load the existing deck
                setDeck(loadedDeck);
            } catch (error) {
                if (error.name!=="AbortError") {
                    throw error;
                }
            }
        }
        loadDeck();
    }, [deckId]);

    const handleChange = ({target}) => {
        setDeck({
            ...deck,
            [target.name]: target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        async function updateDeckData() {
                await updateDeck(deck);
                history.push(`/decks/${deck.id}`);
        }
        updateDeckData();
    }

    return (
        <div>
           
            <div className="container">
                <div className="row">
                    <h1>Edit Deck</h1>
                    <br />
                </div>
                <div className="row w-100">
            
                    <DeckForm formData={deck} handleChange={handleChange} handleSubmit={handleSubmit}/>
                    </div>
                    <div className="row">
                    <Link to={`/decks/${deckId}`}><button className="btn btn-secondary mr-1">Cancel</button></Link>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
       
    )
}

export default EditDeck;