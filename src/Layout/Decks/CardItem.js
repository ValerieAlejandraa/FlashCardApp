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
        <li className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="row m-3">
                <div className="col-md-12">
                    <div className="row" key={card.id}>
                        <div className="col">{card.front}</div>
                        <div className="col">{card.back}</div>
                    </div>
                    <div className="col text-right mt-2">
                        <Link
                            to={`/decks/${deck.id}/cards/${card.id}/edit`}
                            className="btn btn-secondary mr-2"
                            title="Edit Card"
                        >
                            <span className="oi oi-pencil" /> Edit
                        </Link>
                        <button className="btn btn-danger" title="Delete Card">
                            <span
                            className="oi oi-trash"
                            onClick={handleDelete} value={card.id}
                            />
                        </button>
                    </div>
                </div>
            </div>
       </li>
      
    )
 }

export default CardItem;