import { useState } from "react";

import { content } from "./content";
import Home from "./Home.jsx";

export default function App() {
    const [lang, setLang] = useState("fr");

    return (
        <Home
            lang={lang}
            setLang={setLang}
            content={content[lang]}
        />
    );
}