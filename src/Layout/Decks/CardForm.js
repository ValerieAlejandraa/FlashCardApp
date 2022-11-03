import React from "react";

function CardForm({
  onClick,
  buttonText2,
  buttonText1,
  handleSubmit,
  changeHandler,
  formInfo,
}) {
  //add the props from the other forms


  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="front">Front:</label>
        <textarea
          className="form-control"
          rows="3"
          name="front"
          value={formInfo.front}
          onChange={changeHandler}
          required
        />
        <br />
        <label htmlFor="back">Back:</label>
        <textarea
          className="form-control"
          rows="3"
          name="back"
          value={formInfo.back}
          onChange={changeHandler}
          required
        />
        <br />
        <button className="btn btn-secondary mr-2" onClick={onClick}>
          {buttonText1}
        </button>
        <button className="btn btn-primary mr-2" type="submit">
          {buttonText2}
        </button>
      </form>
    </div>
  );
}

export default CardForm;
