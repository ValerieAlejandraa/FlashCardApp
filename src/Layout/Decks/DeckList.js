import React from "react";
import { Link } from "react-router-dom"; //remember that Link is always capitalized
import { deleteDeck } from "../../utils/api/index";


//for the delete button we get the function from utils folder 


function DeckList({ decks }) {
    const handleDelete = async ({target}) => {
        const confirm = window.confirm("Delete this deck? You will not be able to recover it.")
        if(confirm) {
            const id = target.value
            await deleteDeck(id);  //api function from utils 
            window.location.reload(); //The reload() method reloads the current document. The reload() method does the same as the reload button in your browser.
        }
    }
  return (
    <div>
      {decks.map((deck, index) => (
        <div key={index}>
          <div className="card" >
            <div className="row">
              <div className="col-9">
                <h3 className="card-title">{deck.name}</h3>
              </div>
              <div className="col-3">
                <p>{deck.cards.length} cards</p>
              </div>
            </div>
            <p className="card-text">{deck.description}</p>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-4">
                  <Link to={`/decks/${deck.id}`}>
                    <button className="btn btn-secondary mr-1">
                      <i className="bi bi-eye mr-1"></i>
                      View
                    </button>
                  </Link>
                  <Link to={`/decks/${deck.id}/study`}>
                    <button className="btn btn-primary">
                      <i className="bi bi-book mr-1"></i>
                      Study
                    </button>
                  </Link>
                  <div className="col-2">
                    <button
                      value={deck.id}
                      className="btn btn-danger"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeckList;
//line 11 : we want the deck name and deck card length to be in the same row and div
//line 19: we don't want it to be in the same row . we want it to be a paragraph
//line 20: Containers are used to contain, pad, and (sometimes) center the content within them.
//we will add the view, study, and delete button here in a row and contain them together
//added the buttons in a link with a to=""
//add the links in their own div
//trash button
   //did not add link 
   // on click , it will delete the deck 
      //added the icon within the button tag 
      //added the value deck.id