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
    <div >
    <div className="card ">
       <div className="card-body">
        <h4 className="card-title">
        Card {currentCardIndex + 1} of {cards.length}
        </h4>
        <p className="card-text font-weight-lihghter">{card?.back}</p>

    <button className="btn btn-secondary mr-1" onClick={handleFlip2}>Flip</button>
    <button className="btn btn-primary" onClick={handleNext}>Next</button>
    </div>
    </div>
    </div>
    )
  }

  return (
    <div >
    <div className="card">
       <div className="card-body">
        <h4 className="card-title">
        Card {currentCardIndex + 1} of {cards.length}
        </h4>
        <p className="card-text font-weight-lihghter">{card?.front}</p>

    <button className="btn btn-secondary mr-1" onClick={handleFlip}>Flip</button>
    
    </div>
    </div>
    </div>

  );
}


export default StudyCard;

