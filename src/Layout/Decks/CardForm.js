import React from "react"; 

function CardForm({ onClick, buttonText2, buttonText1, handleSubmit, changeHandler, formInfo}){ //add the props from the other forms 


  console.log("formInfo", formInfo)
   return (
    <div> 
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
    </div>
   )
}

export default CardForm;