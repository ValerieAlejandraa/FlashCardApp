import React from "react";

function StudyCard({ card, setShowCard, showCard, handleNext }) {

  const handleFlip = () => {
    setShowCard(!false);
  };
  
  const handleFlip2 = () => {
    setShowCard(false)
  };


  if (showCard) { //show card is !false which will show the back 
    return (
    <>
    {card?.back} 
    <div>
    <button onClick={handleFlip2}>Flip</button>
    <button onClick={handleNext}>Next</button>
    </div>
    </>
    )
  }

  return (
    <>
      <div>{card?.front}</div>
      <button onClick={handleFlip}>Flip</button>
      
    </>
  );
}

export default StudyCard;

