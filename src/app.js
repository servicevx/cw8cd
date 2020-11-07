import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navbar} from './components/Navbar'
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import BatchEdit from "./pages/BatchEdit";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>Tāme</nav>
          </header>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/edit" component={BatchEdit} />
            <Route exact path="/upload" component={UploadPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
