import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api/index";
import CardItem from "./CardItem";
import BreadCrumb from "../Common/BreadCrumb";

function OneDeck() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  console.log(useParams());

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck); //what's in readDeck will be imported to setDeck
    return () => abortController.abort(); //cleanup function
  }, [deckId]);

  const history = useHistory();
  const handleDelete = async ({ target }) => {
    const confirm = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (confirm) {
      const id = target.value;
      await deleteDeck(id); //api function from utils
      history.push("/"); //The reload() method reloads the current document. The reload() method does the same as the reload button in your browser.
    }
  };

  if (!deck.id) {
    return <p> Loading... </p>;
  }
  return (
    <div>
      <BreadCrumb
        link={`/decks/${deckId}`}
        linkName={deck.name}
        pageName={deck.name}
      />
      <h3>{deck.name}</h3>
      <p>{deck.description}</p>
      <div className="row justify-content-between">
        <div className="col-8">
          <Link to={`/decks/${deck.id}/edit`}>
            <button className="btn btn-secondary mr-1">
              <i className="bi bi-pencil mr-1"></i>
              Edit
            </button>
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            <button className="btn btn-primary mr-1">
              <i className="bi bi-book mr-1"></i>
              Study
            </button>
          </Link>
          <Link to={`/decks/${deck.id}/cards/new`}>
            <button className="btn btn-primary">
              <i className="bi bi-plus mr-1"></i>
              Add Card
            </button>
          </Link>
        </div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={handleDelete}
            value={deck.id}
          >
            <i className="bi bi-trash"></i>
            Delete
          </button>
        </div>
      </div>

      <div className="mt-4 card-list">
        <h2>Cards</h2>
        <ul className="list-group">
          {deck.cards.map((card) => (
            <CardItem deck={deck} card={card} key={card.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OneDeck;
