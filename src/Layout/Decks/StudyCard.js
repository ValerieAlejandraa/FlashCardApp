import React from "react";

function StudyCard({ card, currentCardIndex, cards, setShowCard, showCard, handleNext }) {
  const handleFlip = () => {
    setShowCard(!false);
  };
  
  const handleFlip2 = () => {
    setShowCard(false)
  };


  if (showCard) { //show card is !false which will show the back 
    return (
    <>
    <div className="card">
    <div>{card?.back}</div> 
    <h5>Card {currentCardIndex + 1} of {cards.length}</h5>
    <button onClick={handleFlip2}>Flip</button>
    <button onClick={handleNext}>Next</button>
    </div>
    </>
    )
  }

  return (
    <div className="card">
      <h5>Card {currentCardIndex + 1} of {cards.length}</h5>
      <div>{card?.front}</div>
      <button onClick={handleFlip}>Flip</button>
    </div>
  );
}


export default StudyCard;

