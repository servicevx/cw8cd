import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
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
import { getPositions, updatePosition } from "./api/firebase";
import { onLogin, checkIsLogin, getUser } from './helpers/login';

const App = () => {
  const [positions, setPositions] = useState([]);
  const [title, setTitle] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useDefaultPosition(setPositions, setTitle);

  const loadPositions = async (positionName) => {
    setTitle(positionName);
    const response = await getPositions(positionName);
    const loadedPositions = await response.json();
    setPositions(loadedPositions);
  };

  const onPositionsUpdate = (updatedPositions) => {
    const newPositions = positions.map((position, i) => {
      const updatedPosition = updatedPositions.find((updPos) => {
        const isSystemEqual = updPos.system === position.system;
        const isIdEqual = updPos.ID === position.ID;
        return isSystemEqual && isIdEqual;
      });
      if (updatedPosition) {
        updatePosition({ position, positionIdx: i, estimate: title });
        return updatedPosition;
      }
      return position;
    });
    setPositions(newPositions);
  };

  let isUserProjvad = false;

  const isLogin = checkIsLogin();

  const user = getUser();

  if (user === "Dolgovskis") isUserProjvad = true;

  return (
    <Router>
      <div>
        {isLogin && (
          <>
            <header>
              <nav className="navigation">
                <div>{title}</div>
                <div>{user}</div>
              </nav>
            </header>
            <Navbar isUserProjvad={isUserProjvad} />
          </>
        )}

        {!isLogin && <Redirect to="/login" />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Projekti onFileClick={(name) => loadPositions(name)} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              if (isLogin) return <Redirect to="/" />;
              return (
                <div className="form-wrapper">
                  <form onSubmit={() => onLogin(userName, password) }>
                    <input
                      placeholder="name"
                      onChange={(e) => setUsername(e.currentTarget.value)}
                      required
                    />
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      placeholder="password"
                      required
                    />
                    <input type="submit" value="login" />
                  </form>
                </div>
              );
            }}
          />
          <Route exact path="/Grid/GridGroup" component={GridGroup} />
          <Route
            exact
            path="/Edit/BatchEdit"
            render={() => (
              <BatchEdit
                positions={positions}
                onPositionsUpdate={onPositionsUpdate}
              />
            )}
          />
          <Route exact path="/Assign/Assign" component={Assign} />
          <Route exact path="/Upload/upload" component={UploadPage} />
          {/* <Route exact path="/Gantt/Time" component={TimeGantt} /> */}
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

const useDefaultPosition = (setPositions, setTitle) => {
  useEffect(() => {
    const setDefaultPositions = async () => {
      const defaultPosition = "Rimi";
      const response = await getPositions(defaultPosition);
      const loadedPositions = await response.json();
      setTitle(defaultPosition);
      setPositions(loadedPositions);
    };
    setDefaultPositions();
  }, []);
};

export default App;
