import "./analytics.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import BarChart from "../../components/Charts/BarChart";
import StatisticsReport from "../../components/StatisticsReport";
import LineChart from "../../components/Charts/LineChart";
import DoughnutChart from "../../components/Charts/DoughnutChart";

const Analytics = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">Congratulations John! 🎉</h1>
                <div className="detailItem">
                  <span className="itemKey">Best seller of the month</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">$48.9k</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">
                    <button>View Sales</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <StatisticsReport />
          </div>
        </div>
        <div className="bottom">
          <BarChart  />
        </div>
        <div className="bottom">
          <LineChart aspect={3 / 1} />
        </div>
        <div className="bottom">
          <DoughnutChart aspect={3 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
