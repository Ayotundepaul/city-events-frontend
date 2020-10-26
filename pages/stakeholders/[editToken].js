import React from "react";
import { useRouter } from "next/router";
import HostandVendorDashBoard from "../../components/dashboards/eventHostAndVendor/dashboard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import { TokenTable } from "../../common";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
  },
  pricetag:{
    //   backgroundImage: "url('/images/pricetag.png')",
      backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:100,
    width:100,
  },
  back: {
    cursor: "pointer",
  },
  tokencode: {
    backgroundColor: "whitesmoke",
    color: theme.palette.primary.main,
    borderRadius: 7,
    textAlign: "center",
    height: 50,
  },
}));

function EditToken() {
  const router = useRouter();
    const classes = useStyles();
  return (
    <HostandVendorDashBoard>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.price}>
            <div>
              {/* <div > */}
              <ArrowBackIcon onClick={()=>router.back()}  className={classes.back} />
              {/* <span className={classes.back1}>Back</span></div> */}
              <p>Edit discount</p>
            </div>
            <div className={classes.pricetag}>
              <img src='/images/pricetag.png' alt="pricetag" />
            </div>
          </div>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <p>Token</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.tokencode}>
            <p>cityevents/token-discount/432098</p>
          </div>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={2}>
          <p>Details</p>
        </Grid>
        <Grid item xs={12} md={5}></Grid>
        <Grid item xs={12} md={5}></Grid>
        <Grid item xs={12} md={2}>
          <p>Code</p>
        </Grid>
        <Grid item xs={12} md={3}>
        <div className={classes.tokencode}>
            <p>test</p>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <p>Usage</p>
        </Grid>
        <Grid item xs={12} md={3}>
        <div className={classes.tokencode}>
            <p>10</p>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
         
        </Grid>
        <Grid item xs={12} md={2}>
         <p>Discount</p>
        </Grid>
        <Grid item xs={12} md={3}>
        <div className={classes.tokencode}>
            <p>15%</p>
            </div>
        </Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={2}>
          <p>Limit</p>
        </Grid>
        <Grid item xs={12} md={3}>
        <div className={classes.tokencode}>
            <p>100</p>
            </div>
        </Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={2}></Grid>
      </Grid>
      <br />
      <div className={classes.list}>List of tokens used</div>
      {/* <TokenTable /> */}
    </HostandVendorDashBoard>
  );
}

export default EditToken;
