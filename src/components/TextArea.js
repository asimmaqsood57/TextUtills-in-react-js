import React from "react";

function TextArea(props) {
  const upperCase = () => {
    props.settext(props.text.toUpperCase());
  };
  const lowerCase = () => {
    props.settext(props.text.toLowerCase());
  };
  const clear = () => {
    props.settext("");
  };

  const copyText = () => {
    let data = document.getElementById("textArea");

    data.select();

    navigator.clipboard.writeText(data.value);
  };
  //   const rmexsp = () => {
  //     document.getElementById("textArea").value = document
  //       .getElementById("textArea")
  //       .innerText.trim();
  //   };

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
            id="textArea"
            rows="9"
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary " onClick={upperCase}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-3" onClick={lowerCase}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary " onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary  mx-3" onClick={copyText}>
          copy
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
