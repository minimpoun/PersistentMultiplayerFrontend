import Canvas from "app/components/canvas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";

function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
        <Canvas />
    </Router>
  );
}

export default App;
