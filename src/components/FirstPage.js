import React from "react";
import "./FirstPage.css";
import RiddlerPrompt from "./RiddlerPrompt";
import { Outlet, Link } from "react-router-dom";

function FirstPage() {
  return (
    <div>
      <span>
        <RiddlerPrompt /> <span>TRACEROUTE RATAALADA.COM</span>
      </span>
      <table>
        <tbody>
          <tr>
            <td width="80%">POS-0-3-0-0-CR01. ARKHAM.GOTHAMDATA.NET</td>
            <td>[27.05.19.39]</td>
          </tr>
          <tr>
            <td>TBR2.N54GHTM.IP.GOTHAMISP2.NET</td>
            <td>[01.03.19.40]</td>
          </tr>
          <tr>
            <td>CR2.N54GTHM.IP. GOTHAMISP2.NET</td>
            <td>[58.12.19.41]</td>
          </tr>
          <tr>
            <td>CR2.GTHMX.IP.GOTHAMISP2.NET</td>
            <td>[140.10.19.48]</td>
          </tr>
          <tr>
            <td>CR1.GTHMX.IP.GOTHAMISP2.NET</td>
            <td>[405.03.19.87]</td>
          </tr>
          <tr>
            <td>CR3.GTHMX.IP.GOTHAMISP3.NET</td>
            <td>[16.04.19.43]</td>
          </tr>
          <tr>
            <td>CORRECTIONS. ARKHAM.GOV</td>
            <td>[258.10.19.74]</td>
          </tr>
          <tr>
            <td>03.04.20.22</td>
            <td>[03.04.20.22]</td>
          </tr>
        </tbody>
      </table>
      <span>
        <RiddlerPrompt />
        <span>REROUTING...</span>
        <br />
        <RiddlerPrompt />
        <span>SSH UPSTANDING-CITIZEN@RATAALADA.COM</span>
      </span>
      <div className="link-div">
        <Link className="link" to="/console">
          [ CONTINUE TO RIDDLE...]
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default FirstPage;
