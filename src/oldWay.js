import React, { lazy, Suspense, Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./styles.css";

class DynamicImport extends Component {
  state = {
    component: null
  };
  componentDidMount() {
    this.props.load().then(mod => this.setState({ component: mod.default }));
  }
  render() {
    return this.props.children(this.state.component);
  }
}

const Home = props => (
  <DynamicImport load={() => import("./components/Home")}>
    {Component =>
      Component === null ? <h1>Loading...</h1> : <Component {...props} />
    }
  </DynamicImport>
);

const About = props => (
  <DynamicImport load={() => import("./components/About")}>
    {Component =>
      Component === null ? <h1>Loading...</h1> : <Component {...props} />
    }
  </DynamicImport>
);

const Contact = props => (
  <DynamicImport load={() => import("./components/Contact")}>
    {Component =>
      Component === null ? <h1>Loading...</h1> : <Component {...props} />
    }
  </DynamicImport>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
