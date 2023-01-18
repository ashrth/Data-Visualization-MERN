import "./statisticsreports.scss";
import TollIcon from "@mui/icons-material/Toll";

import "react-circular-progressbar/dist/styles.css";

const StatisticsReport = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Statistics</h1>

        <p className="p">Updated 1 month ago</p>
      </div>

      <div className="summary">
        <span>
          <TollIcon className="icon" />
          230k
        </span>
        <span>
          <TollIcon className="icon"/>
          8.549k
        </span>
        <span>
          <TollIcon className="icon"/>
          1.423k
        </span>
        <span>
          <TollIcon className="icon"/>
          $9745
        </span>
      </div>
    </div>
  );
};

export default StatisticsReport;
