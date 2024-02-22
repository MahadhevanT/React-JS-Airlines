import React from "react";
import "./Homecss.css";
export default function Home() {
  return (
    <div className="app">
      <div className="Grid-method">
        <h4>Find the Journey</h4>
        <div className="Line1">
          <div>
            <p>Source</p>
            <input type="text" placeholder="" name="startpoint"></input>
          </div>
          <div>
            <p>Destination</p>
            <input type="text" placeholder="" name="reachpoint"></input>
          </div>
          <div>
            <p>Check-In</p>
            <input type="date" placeholder="" name="date1"></input>
          </div>
        </div>
        <div className="Line2">
          <div>
            <p>Class</p>
            <select>
              <option>Business</option>
              <option>First Class</option>
              <option>Economy Class</option>
            </select>
          </div>
          <div>
            <p>Passengers</p>
            <input type="text" placeholder="" name="reachpoint"></input>
          </div>
          <div>
            <p>Check-Out</p>
            <input type="date" placeholder="" name="date1"></input>
          </div>
        </div>
        <div className="btnw">
          <button className="btw-s">Search</button>
        </div>
      </div>
      </div>
  );
}
