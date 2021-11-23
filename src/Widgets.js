import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function widgets() {
  const recentItem = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {recentItem("reactJS", "Ethiopia")}
      {recentItem("Ethiopia", "Top News - 1024 readers")}
      {recentItem("Ethiopia Prevails", "Top News - 10324 readers")}
      {recentItem("LinkedIn Clone Going Great", "Top News - 2048 readers")}
      {recentItem("LinkedIn ", "Top News - 512 readers")}
    </div>
  );
}

export default widgets;
