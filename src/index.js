import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

// https://reactjs.org/docs/code-splitting.html

import "./styles.css";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
