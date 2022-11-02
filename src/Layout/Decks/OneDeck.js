import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import CardItem from "./CardItem";

function OneDeck() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  console.log(useParams());

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck); //what's in readDeck will be imported to setDeck
    return () => abortController.abort(); //cleanup function
  }, [deckId]);
  console.log(deck);





  if (!deck.id) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <button>Edit</button>
      <button>Study</button>
      <Link to={`/decks/${deck.id}/cards/new`}>
        <button>Add Card</button>
      </Link>
        <button>Delete</button>
      <div>
        <h1>Cards</h1>
        {deck.cards.map((card) => 
        <CardItem deck={deck} card={card} key={card.id}/>)}
      </div>
    </div>
  );
}

export default OneDeck;
