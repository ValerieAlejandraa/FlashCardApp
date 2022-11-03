import React, { useEffect, useState } from "react";
import CardForm from "./CardForm";
import { readCard, readDeck, updateCard } from "../../utils/api/index";
import { useParams, useHistory } from "react-router-dom";
import BreadCrumb from "../Common/BreadCrumb";
//the path is added to index.js and cardItem(as a link)
function EditCard() {
    const history = useHistory();
  //when I submit this editCard form, it should be added to the current deck.cards array
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const [error, setError] = useState(null)
  //here , I want to display what's currently inside of the card 
//   const [formInfo, setFormInfo] = useState({
//     front: "",
//     back: "",
//   });

  //You must use the readDeck() function from src/utils/api/index.js to load the deck that contains the card to be edited
  const { deckId, cardId } = useParams();
  useEffect(() => {
    setDeck({})
    setError(null)
    getData(deckId, cardId);
  }, [deckId, cardId, error]);
  
  
  async function getData(deckId, cardId){
    const abortController = new AbortController();
    try{
       const deckFromApi = await readDeck(deckId, abortController.signal)
       const cardFromApi = await readCard(cardId, abortController.signal)
       setDeck(deckFromApi)
       setCard(cardFromApi)
    } catch(error) {
       setError(error)
    }
    return () => abortController.abort()
  }


  //get the updateCard function and cardId which is in the url/ params

    const onClick = () => {
        history.push(`/decks/${deck.id}`);
    }

    //want to add the updated card back to the oneDeck component 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const abortController = new AbortController()
    const response = await updateCard({...card}, abortController)
    history.push(`/decks/${deckId}`)
    return response
 }



 const changeHandler= ({target})=> {
   setCard({
    ...card,
    [target.name]: target.value
   })
 }

  return (
    <div>
      <BreadCrumb
        link={`/decks/${deckId}/cards/${cardId}/edit`}
        linkName={deck.name}
        pageName={"Edit Card"}
      />
      <h1>Edit Card</h1>
    <CardForm
      buttonText1="Cancel"
      buttonText2="Submit"
      formInfo={card}
      setFormInfo={setCard}
      onClick={onClick}
      changeHandler={changeHandler}
      handleSubmit={handleSubmit}
    ></CardForm>
    </div>
  );
}

export default EditCard;

//the path to this screen should include the deckId and the cardId
    //added path in cardItem and index.js

//use readDeck() function to load the deck that contains the card to be edited
// use readCard() function to load the card that you want to edit 
// breadcrumb navigation 
//it displays the same form as the Add Card screen, except it is prefilled with information for the existing card. it can be edited and updated 
   //updatedCard ?
//if the user clicks on either Save or Cancel, the user is taken to the Deck Screen 
