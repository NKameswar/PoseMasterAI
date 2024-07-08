import React, { useState } from "react";

import { poseInstructions } from "../../utils/data";

import { poseImages } from "../../utils/pose_images";

import "./Instructions.css";

export default function Instructions({ currentPose }) {
  const [instructions, setInsntructions] = useState(poseInstructions);
  // const [userTimer, setUserTimer] = useState(0);
  // const [value, setValue] = useState("");

  return (
    <div className="instructions-container">
      <ul className="instructions-list">
        {instructions[currentPose].map((instruction) => {
          return <li className="instruction">{instruction}</li>;
        })}
      </ul>
      <div>
        <img className="pose-demo-img" src={poseImages[currentPose]} />
      </div>
    </div>
  );
}
