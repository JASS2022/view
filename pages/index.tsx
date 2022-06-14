import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import React from "react";
import { useRef, useContext, useEffect } from "react";
import { DataContext } from "../context/dataprovider";

const items = [
  {
    id: "uuid-1",
    name: "Duckie_1",
    picture: "base64",
    lastSeen: "10:30:20/10/2022",
    trip: {
      // null if it isn't on a trip
      start: 0, // Let's do an array of tiles that the route takes
      destination: 2,
    },
  },
  {
    id: "uuid-2",
    name: "Duckie_2",
    picture: "base64",
    lastSeen: "10:30:20/10/2022",
    trip: {
      // null if it isn't on a trip
      start: 3, // Let's do an array of tiles that the route takes
      destination: 5,
    },
  },
];

const cellMap: any = {
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
    "20": [510, 650],
    "24": [100, 510],
  },
};
console.log(cellMap.xy["11"][0]);

const Home: NextPage = () => {
  const { state, fetchData } = useContext(DataContext);

  const mapped: any = (state.duckies[0]?.location.x.toString() || "1") + (state.duckies[0]?.location.y.toString() || "1");

  React.useEffect(() => {
    fetchData()
  }, []);

  const reffy = useRef();
  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();
  const ref5 = useRef<any>();
  const ref6 = useRef<any>();
  const ref7 = useRef<any>();
  const ref8 = useRef<any>();
  const ref9 = useRef<any>();
  const ref10 = useRef<any>();
  const ref11 = useRef<any>();
  const ref12 = useRef<any>();

  return (
    <>
      <Grid container className={styles.container}>
        <Grid item xs={8}>
          <div className={styles.left}>
            <div>
              <Image
                src={require("../public/roundabout2.png")}
                height={700}
                width={700}
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
            <Image
              layout="raw"
              src={require("../public/duck.png")}
              style={{
                position: "absolute",
                top: cellMap.xy[mapped][0],
                left: cellMap.xy[mapped][1],
              }}
              height={50}
              width={50}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.right}>
            <text className={styles.header}>Duckie UI</text>
            <div className={styles.innerRight}>
              {state.duckies.map((item: any) => {
                return (
                  <div className={styles.duckieData}>
                    <text className={styles.innerTitle}>{item.name}</text>
                    <div className={styles.textDiv}>
                      <text
                        style={{ fontWeight: 600 }}
                      >{`id: ${item.id}`}</text>
                    </div>
                    <div className={styles.textDiv}>
                      <text
                        style={{ fontWeight: 600 }}
                      >{`name: ${item.name}`}</text>
                    </div>
                    <div className={styles.textDiv}>
                      <text
                        style={{ fontWeight: 600 }}
                      >{`lastSeen: ${item.lastSeen}`}</text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
