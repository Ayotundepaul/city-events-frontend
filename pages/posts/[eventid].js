import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import { useRouter } from "next/router";
import { Container } from "../../components/section";
import { GoogleMap } from "../../common";
import BookTicketDialog from "../../components/bookTicket";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 30,
    paddingBottom: 70,
    margin: 50,
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  wrapper: {
    background:
      "transparent linear-gradient(180deg, #FEEDD7 0%, #7F776C 100%) 0% 0% no-repeat padding-box",
  },
  card: {
    maxWidth: "50%",
    margin: "auto",
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
  },
  media: {
    height: 200,
    width: "50%",
    float: "right",
    backgroundColor: "green",
    [theme.breakpoints.down("xs")]: {
      float: "left",
      width: "100%",
    },
  },
  date: {
    float: "right",
    [theme.breakpoints.down ('xs')]:{
      float:'left',
      width:'100%'
    },
    fontSize: 12,
    marginRight: 30,
    fontWeight: "bold",
  },
  price: {
    //fontSize:10,
    paddingLeft: 20,
  },

  tickets: {
    border: "1px solid rgb(236, 91, 38)",
    borderRadius: 0,
  },
  cardfooter: {
    //border:'1px solid grey',
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
    backgroundColor: "#f1f1f1",
    height: "60%",
    justifyContent: "center",
    top: 700,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  description: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paper1: {
    backgroundColor: "#38b9f0",
    height: "40%",
    color: "white",
    borderRadius: 7,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  profilegrid: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  textheader: {
    fontWeight: "bold",
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "grey",
  },
  source: {
    fontWeight: "bold",
    textAlign: "center",
    color: "orangeRed",
  },
  textsource: {
    fontWeight: "bold",
    alignItems: "center",
  },
  follow: {
    width: 150,
    height: 40,
    border: "1px solid orangeRed",
    marginLeft: 10,
    backgroundColor: "white",
  },
  contact: {
    width: "50%",
    margin: "0 auto",
  },
  map: {
    width: "100%",
  },
  location: {
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
  },
  location2: {
    width: "20%",
    margin: "0 auto",
    textAlign: "center",
  },
  location3: {
    width: "40%",
    margin: "0 auto",
    textAlign: "center",
  },
  locationIcon: {
    width: "20%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  otherEvents: {
    width: "40%",
    margin: "0 auto",
    textAlign: "center",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 110,
    fontSize: 12,
    borderBottom: "1px solid white",
  },
  labeldate: {
    position: "relative",
    top: 39,
    left: -40,
  },
  input: {
    marginTop: 26,
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    width: "80%",
    borderBottom: "1px solid grey",
    // backgroundColor:'transparent',
    cursor: "pointer",
    color: "grey",
  },
  events: {
    color: "white",
    borderRight: "1px solid white",
  },
  filter: {
    color: "grey",
    // borderRight:'1px solid white',
  },
  filterdate: {
    color: "transparent",
    // borderBottom:'1px solid grey'
  },
  filterprice: {
    color: "grey",
  },
  advert: {
    paddingTop: 50,
  },
}));

const UpcomingEventDetails = () => {
  const router = useRouter();
  console.log(router);
  const { eventid } = router.query;
  const [like, SetLike] = useState(false);
  const classes = useStyles();
  return (
    <Container title="About Us">
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12} className={classes.wrapper}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/images/corp5.jpg"
                  title="Contemplative Reptile"
                />

                <Grid item xs={12} md={12}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.date}
                    >
                      {eventid}
                    </Typography>
                    <br />
                    <br />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                      <br />
                      By Lincoln & Sons.
                    </Typography>
                  </CardContent>
                </Grid>
              </CardActionArea>

              <CardActions>
                <div className={classes.cardfooter}>
                  <div className={classes.icon}>
                    <ShareIcon />
                    <div>
                      {like ? (
                        <FavoriteIcon
                          onClick={() => SetLike(!like)}
                          color="error"
                        />
                      ) : (
                        <FavoriteBorderIcon onClick={() => SetLike(!like)} />
                      )}
                    </div>
                  </div>
                  <Typography variant="p" className={classes.price}>
                    Starts from $100
                  </Typography>
                  <BookTicketDialog />
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className={classes.description}>
              <p>
                  Description
                <br />
                Session overview:
              </p>
              <p>
                Date and Time
                <br />
                Thu, Jul 10, 2020:
                <br />
                6:00pm-10:00pm
              </p>
            </div>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
            <br />
            <p className={classes.textheader}>Why attend this event?</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </Grid>

            
          <Grid item xs={12} md={12}>
            <p className={classes.textheader}>Artiste profile</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <Typography variant="p" className={classes.textheader}>
              Share with Friends
            </Typography>{" "}
            <br />
            <FacebookIcon style={{color:"blue"}} />
            <LinkedInIcon style={{color:"blue"}} />
            <TwitterIcon style={{color:"cyan"}} />
            <InstagramIcon color="primary" />
          </Grid>
          
         
          <div className={classes.line}></div>
          <Grid item xs={12}>
            <div className={classes.source}>LINCOLN & SONS</div>
            <br />

            <Typography variant="p" className={classes.textsource}>
              Organisers of lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt
            </Typography>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.contact}>
              <button className={classes.follow}>Follow</button>
              <button className={classes.follow}>Contact</button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.map}>
              <GoogleMap />
            </div>
            <div className={classes.location}>
              <p className={classes.textsource}>
                Organisers of lorem ipsum dolor sit amet, consectetur adipiscing
                elit,incididunt
              </p>
            </div>
            <div className={classes.location2}>
              <p className={classes.textsource}>at</p>
            </div>
            <div className={classes.location3}>
              <p className={classes.textsource}>
                Eko Hotel and Suites, Victoria Island Lagos.
              </p>
            </div>
            <div className={classes.locationIcon}>
              <DriveEtaIcon />
              <DirectionsBusIcon />
              <TransferWithinAStationIcon />
              <DirectionsBikeIcon />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.otherEvents}>
              <p className={classes.textsource}>Other Events You May Like</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default UpcomingEventDetails;
