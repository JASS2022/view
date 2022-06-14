import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Grid from "@mui/material/Grid";
import { fontWeight } from "@mui/system";
import CordBlock from "../components/CordBlock";
import { useRef } from "react";
import { DataContext } from '../context/dataprovider.js';
import React, { useContext } from "react";


// import Item from "@mui/material/Item";
const items = [
  {
    id: "uuid-1",
    name: "Duckie_1",
    picture: "base64",
    lastSeen: "10:30:20/10/2022",
    trip: {
      // null if it isn't on a trip
      start: 1, // Let's do an array of tiles that the route takes
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
const Home: NextPage = () => {
  const { state, fetchData } = useContext(DataContext);

  React.useEffect(() => {
    fetchData()
  }, []);

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

  console.log(state)

  // const { top, bottom, left, right } = ref1.current.node
  return (
    <>
      <Grid container className={styles.container}>
        <Grid item xs={8}>
          <div className={styles.left}>
            <div>
              <Image
                src={require("../public/roundabout.png")}
                height={700}
                width={700}
              />
              <CordBlock
                ref={ref1}
                height={140}
                width={140}
                top={24}
                bottom={0}
                left={440}
                right={0}
              />
              <CordBlock
                ref={ref3}
                height={140}
                width={140}
                top={165}
                bottom={0}
                left={440}
                right={0}
              />
              <CordBlock
                ref={ref7}
                height={140}
                width={140}
                top={306}
                bottom={0}
                left={440}
                right={0}
              />
              <CordBlock
                ref={ref10}
                height={140}
                width={140}
                top={447}
                bottom={0}
                left={440}
                right={0}
              />
              <CordBlock
                ref={ref12}
                height={137}
                width={140}
                top={588}
                bottom={0}
                left={440}
                right={0}
              />
              <CordBlock
                ref={ref9}
                height={142}
                width={140}
                top={447}
                bottom={0}
                left={300}
                right={0}
              />
              <CordBlock
                ref={ref11}
                height={142}
                width={142}
                top={447}
                bottom={0}
                left={581}
                right={0}
              />
              <CordBlock
                ref={ref6}
                height={142}
                width={140}
                top={306}
                bottom={0}
                left={300}
                right={0}
              />
              <CordBlock
                ref={ref8}
                height={140}
                width={142}
                top={306}
                bottom={0}
                left={581}
                right={0}
              />
              <CordBlock
                ref={ref2}
                height={140}
                width={140}
                top={165}
                bottom={0}
                left={300}
                right={0}
              />
              <CordBlock
                ref={ref4}
                height={140}
                width={142}
                top={166}
                bottom={0}
                left={581}
                right={0}
              />
              <CordBlock
                ref={ref5}
                height={140}
                width={140}
                top={306}
                bottom={0}
                left={160}
                right={0}
              />
            </div>
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
