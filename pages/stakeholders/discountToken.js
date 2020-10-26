import React, { useState } from "react";
import HostandVendorDashBoard from "../../components/dashboards/eventHostAndVendor/dashboard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useRouter } from 'next/router';
import Divider from "@material-ui/core/Divider";
import { DiscountTable } from "../../common";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  service: {
    backgroundColor: "whitesmoke",
    height: 60,
    maxWidth: 350,
    borderRadius: 7,
  },
  service1: {
    backgroundColor: "whitesmoke",
    height: 60,
    maxWidth: 350,
    borderRadius: 7,
    display: "flex",
    justifyContent: "space-around",
    marginTop: 15,
  },
  label: {
    marginBottom: -15,
  },
  title: {
    paddingTop: 10,
  },
  code: {
    height: 40,
    width: 150,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    border: "none",
    borderRadius: 7,
    cursor: "pointer",
  },
  codebutton: {
    margin: "2% auto",
    width: "150px",
  },
  table: {
    minWidth: 700,
  },
  percent: {
    borderLeft: "2px solid grey",
  },
  counter: {
    width: 60,
    height: 30,
    marginTop: 20,
    border: "none",
    borderRadius: 5,
    marginLeft: 5,
  },
  date:{
      paddingTop:10,
      marginTop:15,
      marginLeft:25,
     
  },
  datepicker:{
    border:'none',
    width:300,
    height:45,
    borderRadius: 5,
  }
}));

function DiscountToken() {
  const [discount, setDiscount] = useState(0);
  const [code, setCode] = useState(0);
  const router= useRouter()
  const classes = useStyles();

  return (
    <div>
      <HostandVendorDashBoard>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p className={classes.label}>
              <b>Services</b>
            </p>
            <div className={classes.service}>
              <p className={classes.title}>The Show must go on</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p className={classes.label}>
              <b>Discount</b>
            </p>
            <div className={classes.service1}>
              <div>
                <p className={classes.title}>Discount by percentage</p>
              </div>
              <div className={classes.percent}>
                <input
                  className={classes.counter}
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p className={classes.label}>
              <b>Number of people to use token</b>
            </p>
            <div className={classes.service1}>
              <div>
                <p className={classes.title}>Limited usage for this code</p>
              </div>
              <div className={classes.percent}>
                <input
                  className={classes.counter}
                  type="number"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p className={classes.label}>
              <b>Expiry date</b>
            </p>
            <div className={classes.service}>
             <div className={classes.date}>
              <input 
              type="date"
              default="08/10/2020"
              className={classes.datepicker}
              />   
             </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.codebutton}>
              <button className={classes.code}>Add discount code</button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DiscountTable />
          </Grid>
        </Grid>
      </HostandVendorDashBoard>
    </div>
  );
}

export default DiscountToken;
