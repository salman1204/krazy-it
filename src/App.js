import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Portfolio from "./components/Portfolio/Portfolio";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="main">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/about" component={About} />

          <Route path="/services" component={Services} />

          <Route path="/portfolio" component={Portfolio} />

          <Route path="/features" component={Features} />

          <Route path="/pricing" component={Pricing} />

          <Route path="/contact" component={Contact} />

          <Route exact path="" component={Home} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
