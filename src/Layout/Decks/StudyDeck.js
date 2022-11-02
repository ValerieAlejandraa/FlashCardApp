import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
import StudyCard from "./StudyCard";
import { useHistory } from "react-router-dom";



function StudyDeck() {
  const [deck, setDeck] = useState({ cards: [] }); //we want to load the deck that is being studied into a state variable , initial value is {}, but it rewrite its with the object deck id
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);

  const { deckId } = useParams();

  const card = deck.cards[currentCardIndex];

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);
  console.log(deck);

  const history = useHistory(); //has to be within a react component or react hook function

  const handleNext = () => {
    if (currentCardIndex === deck.cards.length - 1) {
      return window.confirm(
        "Restart card? Click 'cancel' to return to the home page"
      )
        ? setCurrentCardIndex(0)
        : history.push("/");
    }

    //setCurrentCardIndex((prevState) => Math.min(prevState)) //starting at that value, currentCardIndex + 1

    setCurrentCardIndex(currentCardIndex + 1);
    setShowCard(false); //when we click next
  };

  if (deck.cards.length < 3) {
    return (
      <div className="container">
        <div className="row">
          <h1> Study: {deck.name} </h1>
        </div>
        <h1>Not Enough Cards.</h1>
        <p>{`You need at least 3 cards to study. There are ${deck.cards.length} cards in this deck`}</p>
        <div>
          <Link to={`/decks/${deck.id}/cards/new`}>
          <button> Add Cards </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <h1> Study: {deck.name} </h1>
      </div>
      <div className="row">
        <StudyCard
          card={card}
          setShowCard={setShowCard}
          showCard={showCard}
          handleNext={handleNext}
        />
      </div>
    </>
  );
}

export default StudyDeck;
