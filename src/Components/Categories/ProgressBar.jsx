// import { CenterFocusStrong } from "@material-ui/icons";
import React from "react";
import "../Categories/Styles/ProgressBar.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { makeStyles } from "@material-ui/core/styles";
import "react-circular-progressbar/dist/styles.css";

const useStyle = makeStyles({
  divProgrees: {
    width: 150,
  },
});

const ProgressBar = () => {
  const classes = useStyle();
  return (
    <div className="container-progress">
      <div className="box-text-win">
        <p className="text-win">Gana</p>
      </div>
      <div className="circular-bar">
        <CircularProgressbarWithChildren
          value={50}
          className={classes.divProgrees}
          counterClockwise={true}
          styles={buildStyles({
            pathColor: "#00EDDF",
            trailColor: "#ffff",
            pathTransitionDuration: 0.5,
          })}
          strokeWidth={12}
        >
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

          <div
            style={{
              fontSize: 21,
              marginTop: -5,
              width: 103,
              textAlign: "center",
              color: "#ffff",
            }}
          >
            <strong>50 PUNTOS</strong> De 100
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="text-new-matcherCategory">
        <p className="text-category">
          CATEGORIA <strong>NEW MACHER</strong>
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
