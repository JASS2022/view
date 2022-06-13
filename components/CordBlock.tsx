import React from "react";
import styles from "../styles/Cord.module.css";

export default function CordBlock(props: any) {
  return (
    <div
      ref={props.ref}
      style={{
        position: "absolute",
        height: props.height, //don't change or you will break everything ( bad design )
        width: props.width,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        border: "1px solid #000",
      }}
    ></div>
  );
}
