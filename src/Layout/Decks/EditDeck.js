import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm"; //import our resuable fomr
import { readDeck, updateDeck } from "../../utils/api/index";
import BreadCrumb from "../Common/BreadCrumb";

//add this component to index.js
//decks/:deckId/edit

function EditDeck() {
  const initialFormState = {
    name: "",
    description: "",
  };

  const [deck, setDeck] = useState({ ...initialFormState });
  const history = useHistory();
  const { deckId } = useParams(); //deckId from the url

  useEffect(() => {
    async function loadDeck() {
      try {
        const loadedDeck = await readDeck(deckId); //use readDeck() to load the existing deck
        setDeck(loadedDeck);
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
      }
    }
    loadDeck();
  }, [deckId]);

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    async function updateDeckData() {
      await updateDeck(deck);
      history.push(`/decks/${deck.id}`);
    }
    updateDeckData();
  };

  return (
    <div>
      <BreadCrumb
        link={`/decks/${deckId}/edit`}
        linkName={deck.name}
        pageName={"Edit"}
      />
      <div >
        <h2>Edit Deck</h2>
        <DeckForm
          formData={deck}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div >
          <Link to={`/decks/${deckId}`}>
            <button className="btn btn-secondary mr-1">Cancel</button>
          </Link>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDeck;
