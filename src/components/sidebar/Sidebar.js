import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TollIcon from '@mui/icons-material/Toll';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

import { useContext } from "react";

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Dashboard</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          
          <Link to="/analytics" style={{ textDecoration: "none" }}>
            <li>
              <TollIcon className="icon" />
              <span>Analytics</span>
            </li>
          </Link>
          <Link to="/ecom" style={{ textDecoration: "none" }}>
            <li>
              <TollIcon className="icon" />
              <span>eCommerce</span>
            </li>
          </Link>
          <li>
            <TollIcon className="icon" />
            <span>CRM</span>
          </li>
         
          <p className="title">Apps and Pages</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Email</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Chat</span>
          </li>
          
          <li>
            <TollIcon className="icon" />
            <span>Calender</span>
          </li>
          <li>
            <TollIcon className="icon" />
            <span>Invoice</span>
          </li>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
          <p className="title">UI Elements</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Typography</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Icons</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;