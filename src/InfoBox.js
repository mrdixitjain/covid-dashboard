import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./css/InfoBox.css";
function InfoBox({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infoBox_total" color="textSecondary">
          Total {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
