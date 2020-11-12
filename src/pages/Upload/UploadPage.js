import React, { Component } from "react";
import Doughnut from '../Reports/Doughnut.js';
import Total from '../Total/Total.js';




class App extends Component {
  render() {
    return (
      <div>
        <div>
        <Total />
        <Doughnut />

        </div>
      </div>
    );
}}

export default App;



/*import React, { Component } from "react";

class UploadPage extends Component {
  render() {
    return (
      <div>
        <div>
        <meta http-equiv="refresh" content="0; Https://modulsordering.web.app/index_excel.html" />

        </div>
      </div>
    );
}}

export default UploadPage;
*/