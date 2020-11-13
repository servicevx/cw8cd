import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Projekti from './Projekti';
import GridGroup from './pages/Grid/GridGroup';
import UploadPage from './pages/Upload/UploadPage';
import BatchEdit from './pages/Edit/BatchEdit';
import Assign from './pages/Assign/Assign';
import TimeGantt from './pages/Gantt/TimeGantt';
import toExcel from './pages/Export/toExcel';
import Tabs from './pages/Systems/Tabs';
import Doughnut from './pages/Reports/Doughnut';
import Kanban from './pages/Komponentes/Kanban';
import TotalApp from './pages/Total/TotalApp';
import positions1 from './pages/Estimates/data.js';
import positions2 from './pages/Estimates/data2.js';

const positions = [positions1, positions2];


const App = () => {
  const [activePosition, setActivePosition] = useState(1);
  const [title, setTitle] = useState('24466 Ventspils iela 53');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const positionsToBatchEdit = positions.find(position => position.id === activePosition);

  const checkIsLogin = () => {
    const userName = localStorage.getItem('userName');
    const password = localStorage.getItem('password');
    return userName && password;
  }

  const isLogin = checkIsLogin();

  const onLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    setUsername('');
  }

  return (
    <Router>
      <div>
        {isLogin && (<>
                  <header>
                  <nav>{title}</nav>
                </header>
                <Navbar />
                </>
        )}


        <Switch>
          <Route exact path="/" render={() => {
            if (!isLogin) return <Redirect to="/login"/>;
            return <Projekti onFileClick={(id, title) => {setActivePosition(id); setTitle(title)}} />}} />
          <Route exact path="/login" render={() => {
            if (isLogin) return <Redirect to="/"/>;
            return (
              <div className="form-wrapper">
              <form onSubmit={onLogin}>
                <input placeholder="name" onChange={(e) => setUsername(e.currentTarget.value)}  required />
                <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} placeholder="password" required />
                <input type="submit" value="login" />
              </form>

              </div>
            )
          }} />
          <Route exact path="/Grid/GridGroup" component={GridGroup} />
          <Route exact path="/Edit/BatchEdit" render={() => <BatchEdit positions={positionsToBatchEdit} />} />
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
};
export default App;
