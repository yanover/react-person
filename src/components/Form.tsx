import React, { useState } from "react";
import "../styles/form.css";

export const Form = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setSubmitting(false);

    setTimeout(() => {
      setSubmitting(false);
	  console.log("SUBMITTED")
    }, 3000);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>LastName</p>
            <input name="lastname" />
          </label>
          <label>
            <p>Firstname</p>
            <input name="firstname" />
          </label>
        </fieldset>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};
