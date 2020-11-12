import React, { Component } from "react";
import PieChartApp from './PieChartApp.js';
import Total from './Total.js';


class App extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <td>
                        <Total />
                    </td>
                    <td width ={800} Align='bottom' > 
                        <PieChartApp />
                    </td>
                </tr>
            </table>
        );
    }
}


export default App;