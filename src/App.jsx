import { useState } from "react";
import Home from "./pages/Home";
import { content } from "./content";

export default function App() {
  const [lang, setLang] = useState("fr");

  return (
      <div>
        <Home lang={lang} setLang={setLang} content={content[lang]} />
      </div>
  );
}