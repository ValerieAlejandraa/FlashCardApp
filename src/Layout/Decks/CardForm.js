import React from "react"; 

function CardForm({ onClick, deckName, buttonText2, buttonText1, title, handleSubmit, changeHandler, formInfo}){ //add the props from the other forms 


  console.log("formInfo", formInfo)
   return (
    <>
    <h1> {`${deckName}${title}`} </h1>
    <form onSubmit= {handleSubmit}>
        <label>Front:
           <textarea
           name="front"
           value={formInfo.front}
           onChange={changeHandler}
           required
           >
           </textarea>
        </label>
        <label>
            Back:
            <textarea 
            name="back"
            value={formInfo.back}
            onChange={changeHandler}
            required
            ></textarea>
        </label>
        <br />
        <div className="row">
        <button onClick={onClick}>{buttonText1}</button>
        <button type="submit" >{buttonText2}</button>
        </div>

    </form>
    </>
   )
}

export default CardForm;