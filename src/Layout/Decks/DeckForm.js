import React from "react";
//reusable deck form for create deck and edit deck 
function DeckForm({ formData, title, handleChange, handleSubmit }) {

    return (
        
        <form className="form-group" onSubmit={handleSubmit}>
            <label >
                Name:
            </label>
                <br />
                <input
                    type="text"
                    placeholder="Name of Deck"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: "100%"}}
                    required
                    />
            <br />
            <label htmlFor="description">
                Description:
                
            </label>
            <br/>
            <textarea
                    id="description"
                    placeholder="Brief description of the deck"
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    style={{ width: "100%"}}
                    required
                />
        </form>
    )

}

export default DeckForm;