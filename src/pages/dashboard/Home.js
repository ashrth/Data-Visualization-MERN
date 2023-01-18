import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/Widgets";
import Featured from "../../components/Featured";
import PieChart from "../../components/Charts/PieChart";
import Table from "../../components/Table";
import Visit from "../../components/Visit"

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="sales" />
          <Widget type="revenue" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Featured />
          <PieChart aspect={2 / 1} />
        </div>
        <div className="charts">
          <Visit />
          <div className="listTitle"></div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
