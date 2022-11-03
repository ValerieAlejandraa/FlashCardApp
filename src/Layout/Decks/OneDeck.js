import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory} from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api/index";
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
 


    const history = useHistory();
    const handleDelete = async ({target}) => {
      const confirm = window.confirm("Delete this deck? You will not be able to recover it.")
      if(confirm) {
          const id = target.value
          await deleteDeck(id);  //api function from utils 
          history.push("/"); //The reload() method reloads the current document. The reload() method does the same as the reload button in your browser.
      }
    }


  if (!deck.id) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <Link to={`/decks/${deck.id}/edit`}>
      <button>Edit</button>
      </Link>
      <Link to={`/decks/${deck.id}/study`}>
      <button>Study</button>
      </Link>
      <Link to={`/decks/${deck.id}/cards/new`}>
        <button>Add Card</button>
      </Link>
        <button onClick={handleDelete} value={deck.id}>Delete</button>
      <div>
        <h1>Cards</h1>
        {deck.cards.map((card) => 
        <CardItem deck={deck} card={card} key={card.id}/>)}
      </div>
    </div>
  );
}

export default OneDeck;
