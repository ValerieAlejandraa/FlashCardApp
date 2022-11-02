import React from "react";
import { deleteCard } from "../../utils/api/index"
import {Link} from "react-router-dom"

function CardItem({deck, card}){

    const handleDelete = () => {
        const confirm = window.confirm("Delete this card? You will not be able to recover it ")
        if (confirm) {
            deleteCard(card.id)
            .then(window.location.reload());
        }
        }

 
    return (
       <div className="card" key={card.id}>
       <p >{card.front}</p>
       <p>{card.back}</p>
       <div>
        <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}> 
        <button type="button" className="btn btn-secondary btn-sm">Edit</button>
        </Link>
       <button type="button" className="btn btn-danger btn-sm" onClick={handleDelete} value={card.id}>Delete</button>
       </div>
       </div>
    )
 }

export default CardItem;