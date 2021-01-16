import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  return (
    //contains all our routers/paths
    <Router>
      <Navbar />
      <Switch>
        {/* "/"" is home component */}
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
