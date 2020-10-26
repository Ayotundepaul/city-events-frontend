import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Slide } from "@material-ui/core";
import { Container } from "../components/section";
import { MyTextField, ButtonWithBackdrop, MyDialog,Contact } from "../common";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    marginTop: "3.6rem",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  container: {
    margin: "5% 0",
    marginTop: "6.9rem",

    [theme.breakpoints.down("xs")]: {
      margin: "5%",
      marginTop: "8rem",
    },
  },
  header: {
    width: "100%",
    height: "50vh",
    backgroundImage: "url('/images/support.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "#000000",
    marginBottom: 20,
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      backgroundPosition: "center",
      //backgroundImage: "url('/images/mobilenews.jpg')",
      backgroundSize: "cover",
      height:'55vh'
    },
  },
  headerText: {
    width: "50%",
    paddingLeft: 20,
    [theme.breakpoints.down("xs")]: {
      //color:'#fff',
      width: "100%",
      paddingBottom: "8%",
      fontSize: 14,
    },
  },
  fill:{
    [theme.breakpoints.down('xs')]:{
      fontSize:14
    }
  },
  formContainter: {
    width: "80%",
    margin: "5% auto",
    marginBottom:0,
  },
  inputContainer: {
    backgroundColor: "#F1F1F1",
    border: "1px solid black",
    padding: "6%",
  },
}));

export default function Help() {
  const [open, setOpen] = React.useState(false);
  let [dialogTitle, setDialogTitle] = useState("");
  let [dialogMessage, setDialogMessage] = useState("");
  let [openDialog, setOpenDialog] = useState();
  let [positiveDialog, setPositiveDialog] = useState(true);
  const handleSubmit = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setOpenDialog(true);
      setDialogTitle("Thanks for sending us a feedback!");
      setDialogMessage(
        "Our agents will contact via any of the communication channel that you have submitted"
      );
    }, 3000);
  };
  const classes = useStyles();
  return (
    <Container title="Help" className={classes.root}>
      <MyDialog
        title={dialogTitle}
        openDialog={openDialog}
        positiveDialog={positiveDialog}
        onClose={() => setOpenDialog(false)}
      >
        {dialogMessage}
      </MyDialog>
      <div className={classes.header}>
        <div className={classes.headerText}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <h1>Let Us Know How We Can Support You</h1>
          </Slide>
        </div>
      </div>
      <div className={classes.formContainter}>
        <h3 className={classes.fill}>
          Please fill out the form below for us to be able to help you better
        </h3>
        <Grid container spacing={3} className={classes.inputContainer}>
          <Grid item xs={12} sm={6}>
            <MyTextField
              id="email"
              type="email"
              name="email"
              className="email"
              required="required"
              label="EMAIL:"
              placeholder="Enter email address"
              value=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MyTextField
              id="firstName"
              type="text"
              name="firstName"
              required="required"
              label="FIRST NAME"
              placeholder="Enter first name"
              value=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MyTextField
              id="lastName"
              type="email"
              name="lastName"
              required="required"
              label="LAST NAME"
              placeholder="Enter last name"
              value=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MyTextField
              id="country"
              type="text"
              name="country"
              required="required"
              label="COUNTRY"
              placeholder="Enter email address"
              value=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MyTextField
              id="company"
              type="text"
              name="company"
              required="required"
              label="COMPANY"
              placeholder="Enter comapany name"
              value=""
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MyTextField
              id="phone"
              type="phone"
              name="phone"
              required="required"
              label="PHONE NO"
              placeholder="Enter phone number"
              value=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="HOW CAN WE HELP YOU"
              multiline
              fullWidth
              rows={4}
              defaultValue="Enter your message"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <ButtonWithBackdrop
              label="Contact Us"
              click={handleSubmit}
              open={open}
            />
          </Grid>
          
        </Grid>
      <Grid container spacing={3} style={{marginTop:20}}>
      <Grid item xs={12}>
          <Contact  />
            </Grid>
      </Grid>
      </div>
    </Container>
  );
}
