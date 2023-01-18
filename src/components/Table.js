import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const List = () => {
  const rows = [
    {
      input: "",
      name: "Website SEO",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      leader: "Eileen",
      team: "4 members",
      status: "65%",
      action: "",
    },
    {
      input: "",
      name: "Social Banners",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      leader: "Owen",
      team: "4 members",
      status: "70%",
      action: "",
    },
    {
      input: "",
      name: "Logo Designs",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      leader: "Keith",
      team: "4 members",
      status: "80%",
      action: "",
    },
    {
      input: "",
      name: "IOS App Design",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      leader: "Merlin",
      team: "4 members",
      status: "30%",
      action: "",
    },
    {
      input: "",
      name: "Figma Dashboards",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      leader: "Harmonica",
      team: "3 members",
      status: "50%",
      action: "",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <div className="tablehead">
        <div>
          <h3>Projects</h3>
        </div>
        <div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">
              <input type="checkbox"></input>
            </TableCell>
            <TableCell className="tableCell">NAME</TableCell>
            <TableCell className="tableCell">ICON</TableCell>
            <TableCell className="tableCell">LEADER</TableCell>
            <TableCell className="tableCell">TEAM</TableCell>
            <TableCell className="tableCell">STATUS</TableCell>
            <TableCell className="tableCell">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="tableCell">{row.input}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.leader}</TableCell>
              <TableCell className="tableCell">{row.team}</TableCell>

              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                {<MoreVertIcon fontSize="small" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
