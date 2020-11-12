import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navbar} from './components/Navbar'
import Projekti from "./Projekti";
import GridGroup from "./pages/Grid/GridGroup";
import UploadPage from "./pages/Upload/UploadPage";
import BatchEdit from "./pages/Edit/BatchEdit";
import Assign from "./pages/Assign/Assign";
import TimeGantt from "./pages/Gantt/TimeGantt";
import toExcel from "./pages/Export/toExcel";
import Tabs from "./pages/Systems/Tabs";
import Doughnut from "./pages/Reports/Doughnut";
import Kanban from "./pages/Komponentes/Kanban";
import TotalApp from "./pages/Total/TotalApp";

class App extends Component {
  render() {
    return (
      <Router>
         
         <div >
          <header>
            <nav>Projekts: Ventspils ielas 53</nav>
          </header>
          <Navbar />
          
          <Switch>
            <Route exact path="/" component={Projekti} />
            <Route exact path="/Grid/GridGroup" component={GridGroup} />
            <Route exact path="/Edit/BatchEdit" component={BatchEdit} />
            <Route exact path="/Assign/Assign" component={Assign} /> 
            <Route exact path="/Upload/upload" component={UploadPage} />
            <Route exact path="/Gantt/Time" component={TimeGantt} />  
            <Route exact path="/Systems/Tabs" component={Tabs} /> 
            <Route exact path="/Reports/Doughnut" component={Doughnut} />                 
            <Route exact path="/Export/toExcel" component={toExcel} />    
            <Route exact path="/Komponentes/Kanban" component={Kanban} />   
            <Route exact path="/Total/TotalApp" component={TotalApp} /> 
                            
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
