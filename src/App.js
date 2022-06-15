import logo from './logo.svg';
import './App.css';
import Grid from "@mui/material/Grid";
import React from "react";
import { useRef, useState } from "react";
var W3CWebSocket = require('websocket').w3cwebsocket;

const cellMap = {
  xy: {
    "02": [350, 200],
    "11": [500, 375],
    "12": [375, 376],
    "13": [235, 375],
    "21": [510, 510],
    "23": [210, 510],
    "31": [500, 650],
    "32": [396, 650],
    "33": [256, 650],
    "20": [650, 510],
    "24": [100, 510],
  },
};

function App() {
  const [duckieState, setDuckieState] = useState([]);    // { id: "asdf", location: { x: 1, y: 1 } }
  const [roundaboutsState, setRoundaboutsState] = useState([])
  //const [wsState, setWsState] = useState(null)

  const ws = new W3CWebSocket("wss://socketsbay.com/wss/v2/2/demo/");
  ws.onopen = (event) => {
    console.log("connected");
  };
  ws.onmessage = (event) => {
    let jsonData = null
    try {
      jsonData = JSON.parse(event.data);
    } catch {
      console.log("Invalid json data")
      return
    }

    switch (jsonData.type) {
      case "allDuckies":
        const allDuckiesData = jsonData.data;
        allDuckiesData.map((duck) => {
          const existingDuckiesIds = duckieState.map((duck) => duck.id);
          if (!existingDuckiesIds.includes(duck.id)) {
            console.log("Setting allDuckies")
            setDuckieState([...duckieState, duck]);
          } else {
            console.log("Updating allDuckies")
            setDuckieState(
              duckieState.map((existingDuck) => {
                return duck.id === existingDuck.id
                  ? mergeJSONs(existingDuck, duck)
                  : existingDuck;
              })
            );
          }
        });

        break;

      case "locationUpdate":
        //console.log(duckieState);

        const locationUpdateData = jsonData.data;

        const existingDuckiesIds = duckieState.map((duck) => duck.id);
        if (!existingDuckiesIds.includes(locationUpdateData.id)) {
          locationUpdateData["name"] = "Duckie";
          locationUpdateData["picture"] = null;
          locationUpdateData["lastSeen"] = new Date();

          console.log("Set new Duckie Location update");
          setDuckieState([...duckieState, locationUpdateData]);
          //console.log([...duckieState, locationUpdateData])
        } else {
          console.log("UPDATE");
          console.log(
            duckieState.map((existingDuck) => {
              return locationUpdateData.id === existingDuck.id
                ? mergeJSONs(existingDuck, locationUpdateData)
                : existingDuck;
            }))
          setDuckieState(
            duckieState.map((existingDuck) => {
              return locationUpdateData.id === existingDuck.id
                ? mergeJSONs(existingDuck, locationUpdateData)
                : existingDuck;
            })
          );
          console.log("Updated Duckie Location");
        }

        break;

      default:
        console.log("unknowen event type");
        console.log(jsonData);
    }
  }

  const mergeJSONs = (json1, json2) => {
    if (json1 == null) {
      return json2;
    }
    if (json2 == null) {
      return json1;
    }
    for (var key in json2) {
      json1[key] = json2[key];
    }
    return json1;
  };

  const reffy = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();
  const ref12 = useRef();

  return (
    <Grid container className="container">
      <Grid item xs={8}>
        <div className="left">
          <div>
            <img
              src={require("./roundabout2.png")}
              alt="panda"
              className="photo"
            />
            <div
              onClick={() => {
                console.log(ref1.current?.getBoundingClientRect());
              }}
              ref={ref1}
              style={{
                position: "absolute",
                display: "inline",
                border: "1px solid #000",
                height: 140,
                width: 140,
                top: 24,
                bottom: 0,
                left: 440,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref3.current?.getBoundingClientRect());
              }}
              ref={ref3}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 140,
                width: 140,
                top: 165,
                bottom: 0,
                left: 440,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref7.current?.getBoundingClientRect());
              }}
              ref={ref7}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 140,
                width: 140,
                top: 306,
                bottom: 0,
                left: 440,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref10.current?.getBoundingClientRect());
              }}
              ref={ref10}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 140,
                width: 140,
                top: 447,
                bottom: 0,
                left: 440,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref12.current?.getBoundingClientRect());
              }}
              ref={ref12}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 137,
                width: 140,
                top: 588,
                bottom: 0,
                left: 440,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref9.current?.getBoundingClientRect());
              }}
              ref={ref9}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 142,
                width: 140,
                top: 447,
                bottom: 0,
                left: 300,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref11.current?.getBoundingClientRect());
              }}
              ref={ref11}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 142,
                width: 142,
                top: 447,
                bottom: 0,
                left: 581,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref6.current?.getBoundingClientRect());
              }}
              ref={ref6}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 142,
                width: 140,
                top: 306,
                bottom: 0,
                left: 300,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref8.current?.getBoundingClientRect());
              }}
              ref={ref8}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 140,
                width: 142,
                top: 306,
                bottom: 0,
                left: 581,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref2.current?.getBoundingClientRect());
              }}
              ref={ref2}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 140,
                width: 140,
                top: 165,
                bottom: 0,
                left: 300,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref4.current?.getBoundingClientRect());
              }}
              ref={ref4}
              style={{
                position: "absolute",
                border: "1px solid #000",
                height: 140,
                width: 142,
                top: 166,
                bottom: 0,
                left: 581,
                right: 0,
              }}
            />
            <div
              onClick={() => {
                console.log(ref5.current?.getBoundingClientRect());
              }}
              ref={ref5}
              style={{
                position: "absolute",
                display: "inline",
                border: "1px solid #000",
                height: 140,
                width: 140,
                top: 306,
                bottom: 0,
                left: 160,
                right: 0,
              }}
            />
          </div>

          {duckieState.map(duckie => (
            !(duckie.location.x === 0 && duckie.location.y === 0) &&
            <img
              alt="duck"
              src={require("./duck.png")}
              style={{
                position: "absolute",
                top: cellMap.xy[duckie.location.x.toString() + duckie.location.y.toString()][0],  // 
                left: cellMap.xy[duckie.location.x.toString() + duckie.location.y.toString()][1],
                height: 50,
                width: 50
              }}
            />
          ))
          }
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="right">
          <text className="header">Duckie UI</text>
          <div className="innerRight">
            {duckieState.map((item) => {
              return (
                <div className="duckieData">
                  <text className="innerTitle">{item.name}</text>
                  <div className="textDiv">
                    <text
                      style={{ fontWeight: 600 }}
                    >{`id: ${item.id}`}</text>
                  </div>
                  <div className="textDiv">
                    <text
                      style={{ fontWeight: 600 }}
                    >{`name: ${item.name}`}</text>
                  </div>
                  <div className="textDiv">
                    <text
                      style={{ fontWeight: 600 }}
                    >{`lastSeen: ${item.lastSeen}`}</text>
                  </div>
                  <div className="textDiv">
                    <text
                      style={{ fontWeight: 600 }}
                    >{`currentLocation: (${item.location.x}, ${item.location.y})`}</text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
