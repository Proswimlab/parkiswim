import React, { useRef, useState } from "react";
import "./style/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NewHeader } from "./components/Header";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";
import { Contact } from "./views/Contact";
import ScrollToTop from "./scrollToTop";
export enum LANGUAGE {
  NL = "nl",
  EN = "en",
}

function App() {
  const [language, setLanguage] = useState(LANGUAGE.NL);
  let refs = {
    what: useRef(null),
    where: useRef(null),
    who: useRef(null),
    about: useRef(null),
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <NewHeader setLanguage={setLanguage} language={language} refs={refs} />
        <Switch>
          <Route exact path="/">
            <Home refs={refs} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer refs={refs} />
      </Router>
    </>
  );
}

export default App;
