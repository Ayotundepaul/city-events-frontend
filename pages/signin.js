import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Footer from '../common/Footer';
import { Grid, Typography, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import FacebookLogin from "react-facebook-login";
import {
  FacebookProvider,
  Like,
  Comments,
  CommentsCount,
  LoginButton,
  Profile,
} from "react-facebook";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import * as actions from "../src/store/actions";
import { isValidEmail, isValidPassword } from "../src/helpers/validator";
import {
  Header,
  GuestRoute,
  MyTextField,
  MyCustomButton,
  MyDialog,
} from "../common";
import { Colors, recaptchaKey, site_key  } from "../constants";

const useStyles = makeStyles((theme) => ({
  title: {
    height: "140vh",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  textField: {
    width: "70%",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    "& a": {
      color: "#F06E38",
    },
  },
  google: {
    backgroundColor: "#F0385E",
    width: "73%",
    "&:hover": {
      backgroundColor: "#961c36",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  facebook: {
    width: "73%",
    backgroundColor: "#37B9F0",
    "&:hover": {
      backgroundColor: "#0070f3",
    },
    // backgroundColor: "#37B9F0",
    //  width: "100%",
    // "&:hover": {
    //   backgroundColor: "#0070f3",
    // },
    [theme.breakpoints.down("xs")]:{
      width:"100%",
    },
  },
  continue: {
    fontSize:14
  },
  
  loginbtn:{
    width:'73%'
  },
  
}));

const Signin = (props) => {
  const [error, setErrorMessage] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [positiveDialog, setPositiveDialog] = useState();
  const isAthenticated = props.isAuth;
  const message = props.message;
  const errorMsg = props.error;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (isAthenticated && message.status) {
      setDialogTitle(message.status);
      setDialogMessage(message.message);
      setPositiveDialog(true);
      setOpenDialog(true);
      setTimeout(() => {
        router.push("./");
      }, 2000);
    } else if (errorMsg && errorMsg.status) {
      setDialogTitle(errorMsg.status);
      setDialogMessage(errorMsg.message);
      setPositiveDialog(false);
      setOpenDialog(true);
    } else if (token) {
      router.push("./");
    } else {
      setDialogTitle("");
      setDialogMessage("");

      setPositiveDialog(false);

      setOpenDialog(false);
    }
  }, [isAthenticated, message, errorMsg]);
  const proceed = props.loading;
  const router = useRouter();
  const validateLogin = ({ email, password }) => {
    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email");
      return;
    }
    if (!isValidPassword(password.trim()) || password.length < 4) {
      setErrorMessage("Invalid password");
      return;
    }
    if (!verified) {
      setDialogTitle("Hold on!");
      setDialogMessage("Please verify you are human");

      setPositiveDialog(false);

      setOpenDialog(true);
      return;
    }
    return true;
  };

  const onRecaptcha = (value) => {
    //verified = value;
    if (value) {
      setVerified(true);
    }
  };

  const componentClicked = () => {
    console.log("i was clicked");
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  const handleError = (error) => {
    this.setState({ error });
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  const handleSubmit = () => {
    console.log('environment......',process.env.NODE_ENV)
    if (validateLogin(user)) {
      props.onAuth(user.email, user.password);
      setTimeout(() => {}, 3000);
    }
  };
  const classes = useStyles();
  return (
    <>
      <Header route="signin" />
      <GuestRoute
        Class={classes.title}
        title="Sign in"
        greeting="Welcome Back"
        action="Sign in to continue"
      >
        <Grid container spacing={3}>
          <MyDialog
            title={dialogTitle}
            openDialog={openDialog}
            positiveDialog={positiveDialog}
            onClose={() => setOpenDialog(false)}
          >
            {dialogMessage}
          </MyDialog>
          <div style={{ color: "red", margin: "0 auto" }}> {error}</div>
          <Grid item xs={12}>
            <MyTextField
              id="email"
              type="email"
              name="email"
              required="required"
              label="Email address"
              placeholder="Enter email address"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              id="password"
              type="password"
              name="password"
              required="required"
              label="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
               
          </Grid>
          <Grid item xs={12}>
            <FormControl
              className={clsx(classes.formControl, classes.recaptcha)}
            >
              <ReCAPTCHA sitekey={recaptchaKey} onChange={onRecaptcha} />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <MyCustomButton
              onClick={handleSubmit}
              changeClass={true}
              progress={proceed}
              className={classes.loginbtn}
            >
              Login 
            </MyCustomButton>
          </Grid>
          <Grid item xs={12} md={12}>
            <Link href="/forgetpassword">
              <a className={classes.pswd}>Forget Password</a>
            </Link>
          </Grid>

          <Grid item xs={12} className={classes.continue}>
            <Typography component="p">Continue with social accounts</Typography>
          </Grid>
          <Grid item xs={12} sm={12} >
            <GoogleLogin
              clientId="419497687791-55h0ksjuiqkj87h4hitktma1asoftbng.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className={classes.google}
            />
          </Grid>
          {/* <Grid item xs={12} >
            <FacebookProvider appId="662642454397577">
              <LoginButton
                scope="email"
                onCompleted={responseFacebook}
                onError={handleError}
              >
                <span>Login via Facebook</span>
              </LoginButton>
            </FacebookProvider>
          </Grid> */}
          <Grid item xs={12} sm={12}>
          <MyCustomButton progress={false} className={classes.facebook}>
                Continue with facebook
              </MyCustomButton>
            </Grid>
            {/* <FacebookLogin
              appId="662642454397577"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              className={classes.fblogin}
              style= {{width:"73%"}}
            /> */}
          {/* </Grid> */}
        </Grid>
      </GuestRoute>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    message: state.auth.message,
    isAuth: state.auth.idToken != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
