import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Toolbar, InputAdornment } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Input from "../../../components/input/input";
import DashboardContainer from "../../../components/dashboards/adminAndCso/dashboard";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    //padding: theme.spacing(2),
    //textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 30,
  },
  wrapper: {
    backgroundColor: "red",
    // margin: theme.spacing(5),
    // padding: theme.spacing(3)
  },
  imgtitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  imggrid: {
    backgroundSize: "cover",
    backgroundRepeat: "no repeat",
    backgroundImage: "url('/images/service4.jpg')",
    [theme.breakpoints.down ('xs')]:{
      height:200,
    
  },
  [theme.breakpoints.down ('sm')]:{
    height:350,
}
  },
  approvalbtn: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto",
  },
  apprvbtn: {
    height: 30,
    width: 120,
    color: "green",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },
  disapprvbtn: {
    height: 30,
    width: 120,
    color:'red',
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  searchInput: {
    width: "100%",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [value, setValue] = useState(0);
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.status.toLowerCase().includes(target.value)
          );
      },
    });
  };
  return (
    <DashboardContainer openBackDrop={openBackdrop}>
      <div className={classes.title}>
        <h4>Approvals</h4>
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
      </div>
      <div className={classes.root}>
        <paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} className={classes.imggrid}></Grid>

            <Grid item xs={6} md={3}>
              <h5>Services Category</h5>
              <p>Food & Drinks</p>
              <h5>Host Name</h5>
              <p>Toheed Dende</p>
              <h5>Fees</h5>
              <p>
                Flat Project Rate,
                <br /> Percencentage
              </p>
            </Grid>
            <Grid item xs={6} md={3}>
              <h5>Type of Service</h5>
              <p>Catering</p>
              <h5>Body</h5>
              <p>Individual or Institution</p>
              <h5>Tags</h5>
              <p>
                Lorem ipsum dolor sit amet,
                <br /> consetetur
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.imgtitle}>
                <div>
                  <h6>Date Created: Aug 12th,2020</h6>
                </div>
                <div>
                  <h6>Experience: Intermediate</h6>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.description}>
              <h5>Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </Grid>
            <Grid item xs={12} className={classes.approvalbtn}>
              <div className={classes.btn}>
                <button className={classes.apprvbtn}>Approve</button>
                <button className={classes.disapprvbtn}>Disapprove</button>
              </div>
            </Grid>
          </Grid>
        </paper>
      </div>
    </DashboardContainer>
  );
}
