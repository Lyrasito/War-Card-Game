import React from "react";
import "./App.css";
import cardBack from "./blue_back.jpg";
import { userCards, compCards } from "./index";

export const Button = (props) => {
  return (
    <div className="buttoncontainer">
      <button
        className="regClick"
        id={props.isWar ? "invisible" : "clickme"}
        onClick={props.onClick}
      >
        Next Card
      </button>
      <button
        className="warClick"
        id={props.isWar ? "clickme" : "invisible"}
        onClick={props.onClick3}
      >
        Next Card
      </button>
      <button id="clickme" onClick={props.onClick2}>
        Shuffle Both Hands
      </button>
    </div>
  );
};
export const CardDisplay = (props) => {
  return (
    <div>
      <header>
        <h1>Play War</h1>
      </header>
      <div className="about">
        <h4 id="user-card-about">User cards remaining: 26</h4>
        <h4 id="comp-card-about">Computer cards remaining: 26</h4>
      </div>
      <div className="card-images">
        <img src={cardBack} className="card" id="user-card" alt="" />
        <img src={cardBack} className="card" id="comp-card" alt="" />
      </div>
      <div id={props.isWar ? "war-images" : "invisible"}>
        <div className="userwar">
          <img src={cardBack} className="warcard" alt="" />
          <img src={cardBack} className="warcard" alt="" />
          <img src={cardBack} className="warcard" alt="" />
        </div>
        <div className="compwar">
          <img src={cardBack} className="warcard" alt="" />
          <img src={cardBack} className="warcard" alt="" />
          <img src={cardBack} className="warcard" alt="" />
        </div>
      </div>
      <div id={props.isWar ? "showWar" : "invisible"}>
        <img
          src={require(`${userCards[3].img}`)}
          className="warcard1"
          id={props.isWar ? "usercardwar4" : "invisible"}
          alt=""
        />
        <img
          src={require(`${compCards[3].img}`)}
          className="warcard1"
          id={props.isWar ? "compcardwar4" : "invisible"}
          alt=""
        />
      </div>
    </div>
  );
};
