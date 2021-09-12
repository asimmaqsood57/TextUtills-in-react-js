import React from "react";

function TextArea(props) {
  const upperCase = () => {
    props.settext(props.text.toUpperCase());
  };

  return (
    <>
      <div className="container my-3">
        <h2>Your Text</h2>

        <div class="mb-3">
          <textarea
            value={props.text}
            onChange={(e) => {
              props.settext(e.target.value);
            }}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="9"
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={upperCase}>
          Convert to upper case
        </button>
      </div>

      <div className="container">
        <h2 className="my-3">Preview</h2>

        {props.text}
      </div>
    </>
  );
}

export default TextArea;
