import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
function App() {
  const [text, settext] = useState("");

  return (
    <>
      <NavBar />
      <TextArea text={text} settext={settext} />
    </>
  );
}

export default App;
