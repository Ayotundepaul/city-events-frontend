import React, { useState } from "react";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  Grid,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useTable from "../../components/tables/useTable";
import Input from "../../components/input/input";
import DashboardContainer from "../../components/dashboards/adminAndCso/dashboard";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    height: 100,
  },
  btn: {
    border: "10px solid white",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  title: {
    fontSize: 14,
    color: "white",
  },
  pos: {
    marginBottom: 12,
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "fullName", label: "Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "Role", label: "Role" },
  { id: "mobile", label: "Mobile Number" },
  { id: "Status", label: "Status", disableSorting: true },
  { id: "button", label: "", disableSorting: true },
];

function AdminsDashboard() {
  const classes = useStyles();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [records, setRecords] = useState([
    {
      id: "ggsd",
      fullName: "Samuel akin",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Active",
    },
    {
      id: "ggsds",
      fullName: "Ada Obi",
      email: "gakin95@gmail.com",
      role: "cso",
      mobile: "08023456787",
      status: "Pending",
    },
    {
      id: "ggdfsd",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "vendor",
      mobile: "08023456787",
      status: "Disabled",
    },
    {
      id: "ggfghsd",
      fullName: "Ada Obi",
      email: "gakin95@gmail.com",
      role: "host",
      mobile: "08023456787",
      status: "Active",
    },
    {
      id: "ggs34d",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Pending",
    },
    {
      id: "ggdgusd",
      fullName: "Samuel akin",
      email: "gakin95@gmail.com",
      role: "cso",
      mobile: "08023456787",
      status: "Disabled",
    },
    {
      id: "gghsjsd",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Active",
    },
    {
      id: "ggs;lsd",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Pending",
    },
    {
      id: "ggs8wd",
      fullName: "Samuel akin",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Disabled",
    },
    {
      id: "gg542sd",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Disabled",
    },
    {
      id: "ggs90djsd",
      fullName: "Ada Obi",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Pending",
    },
    {
      id: "ggywsd",
      fullName: "Samuel akin",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Active",
    },
    {
      id: "gguwisd",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "vendo",
      mobile: "08023456787",
      status: "Active",
    },
    {
      id: "ggs12wad",
      fullName: "Ada Obi",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Active",
    },
    {
      id: "ggswyud",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Active",
    },
    {
      id: "ggsiqxd",
      fullName: "Ada Obi",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Pending",
    },
    {
      id: "ggnx;lsd",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "host",
      mobile: "08023456787",
      status: "Pending",
    },
    {
      id: "ggs87sd",
      fullName: "Ada Obi",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Pending",
    },
    {
      id: "gg789ssd",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Pending",
    },
    {
      id: "gg8wmsd",
      fullName: "Gbenga akingbulere",
      email: "gakin95@gmail.com",
      role: "user",
      mobile: "08023456787",
      status: "Pending",
    },
  ]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };
  let content = null;
  if (records && records.length > 0) {
    content = (
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Input
            label="Search Users"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>Veiw</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    );
  } else {
    content = (
      <Paper className={classes.pageContent}>
        <h1 style={{ textAlign: "center" }}>There is no data available</h1>
      </Paper>
    );
  }

  return (
    <DashboardContainer openBackDrop={openBackdrop}>
      <Grid container spacing={3} className={classes.root}>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          className={classes.btn}
          style={{ backgroundColor: "#f0c238" }}
        >
          <CardActions>
            <Button size="small" style={{color: "white"}}>Created Events</Button>
          </CardActions>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              23
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          className={classes.btn}
          style={{ backgroundColor: "#F0683C" }}
        >
          <CardActions>
            <Button size="small" style={{color: "white"}}>Approved Events</Button>
          </CardActions>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              23
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          className={classes.btn}
          style={{ backgroundColor: "#F03A5B" }}
        >
          <CardActions>
            <Button size="small" style={{color: "white"}}>Listed Services</Button>
          </CardActions>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              23
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          className={classes.btn}
          style={{ backgroundColor: "#8D5000" }}
        >
          <CardActions>
            <Button size="small" style={{color: "white"}}>Services Approved</Button>
          </CardActions>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              23
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={12}>
          {content}
        </Grid>
      </Grid>
    </DashboardContainer>
  );
}

export default AdminsDashboard;
