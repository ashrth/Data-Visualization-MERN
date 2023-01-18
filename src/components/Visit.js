import "./visit.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Visit = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Source Visits</h1>

        <p>38.4k Visitors</p>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        
       
        <div className="summary">
          
          <div className="summaryitems">Direct Source</div><div>1.2k</div>
            </div>
            <div className="summary">
          
          <div className="summaryitems">
Social Network</div><div>31.5k</div>
            </div>
            <div className="summary">
          
          <div className="summaryitems">Email Newsletter</div><div>893</div>
            </div>
            <div className="summary">
          
          <div className="summaryitems">Direct Source</div><div>1.2k</div>
            </div>
            <div className="summary">
          
          <div className="summaryitems">
Referrals</div><div>342</div>
            </div>
            <div className="summary">
          
          <div className="summaryitems">ADVT</div><div>2.15k</div>
            </div>
            <div className="summary">
          
          <div className="summaryitems">Othe</div><div>12.5k</div>
            </div>
      </div>
    </div>
  );
};

export default Visit;
