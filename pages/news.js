import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "../components/section";
import { News } from "../components/section/allItems";
import { Grid, Typography, Slide } from "@material-ui/core";
import { MyTextField, ButtonWithBackdrop, MyDialog } from "../common";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  header: {
    width: "100%",
    height: "50vh",
    backgroundImage: "url('/images/news.png')",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    display: "flex",
   alignItems: "flex-start",
   justifyContent:'center',
    color: "#000000",
    marginBottom: 20,
    flexDirection:'column',
    [theme.breakpoints.down("xs")]: {
      backgroundPosition: "center",
      backgroundImage: "url('/images/mobilenews.jpg')",
      backgroundSize: "cover",
      height:'75vh'
    },
  },
  headerText: {
    width:'50%',
    paddingLeft:20,
    [theme.breakpoints.down('xs')]:{
      color:'#fff',
      width:'100%',
    }
  },
  newscontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  newsgrid: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    paddingTop: 20,
  },
  leftwing: {
    height: 300,
    backgroundImage: "url('./images/Group.png')",
    backgroundSize: 300,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingBottom: 50,
    marginTop: -65,
  },

  midwing: {
    height: 200,
    border: "1px solid white",
  },
  anything: {
    fontWeight: "bold",
    paddingTop: 50,
  },
  rightwing: {
    height: 300,
    paddingBottom: 47,
    backgroundImage: "url('./images/Group.svg')",
    backgroundSize: 400,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginTop: -48,
  },
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  curation: {
    paddingBottom: 30,
    // paddingTop:30,
    fontWeight: "bold",
  },
  load: {
    marginTop: 20,
    textAlign: "center",
  },
}));

const allNews = [
  {
    id: "fgfs",
    title: "World Bank Lagos 2020",
    content:
      "The New Path Leading to the new Future. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp5.jpg",
  },
  {
    id: "fg3fs",
    title: "Berlin Entrepreneur corp",
    content:
      " Quisque non turpis id massa. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp3.jpg",
  },
  {
    id: "fgq5fs",
    title: "Maranatha Lagos 2020",
    content:
      " Women Empowerment Submit. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp6.jpg",
  },
  {
    id: "fgsfs",
    title: "Warrior Apparels",
    content:
      " Getting your Foot in the door. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp1.jpg",
  },
  {
    id: "fgfhjs",
    title: "Plural Sight ",
    content:
      "The Future of Africa. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp5.jpg",
  },
  {
    id: "fgf2xs",
    title: "Berlin Entrepreneur corp",
    content:
      " Quisque non turpis id massa. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp3.jpg",
  },
  {
    id: "fgsvfs",
    title: "Maranatha Lagos 2020",
    content:
      " Women Empowerment Submit. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp6.jpg",
  },
  {
    id: "fg88fs",
    title: "Warrior Apparels",
    content:
      " Getting your Foot in the door. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp1.jpg",
  },
  {
    id: "fgfa3s",
    title: "Berlin Entrepreneur corp",
    content:
      " Quisque non turpis id massa. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp3.jpg",
  },
  {
    id: "fg35jfs",
    title: "Plural Sight ",
    content:
      "The Future of Africa. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp5.jpg",
  },
  {
    id: "fgsssfs",
    title: "Warrior Apparels",
    content:
      " Getting your Foot in the door. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp1.jpg",
  },
  {
    id: "fjyagfs",
    title: "World Bank Lagos 2020",
    content:
      "The New Path Leading to the new Future. All purchased tickets remain valid for the new date which will be announced soon. Pls bear with us as we try to manage this unprecedented situation constructively.",
    image: "/images/corp5.jpg",
  },
];

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleSubmit = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <Container title="News" className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerText}>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <h1>The best curation Around events.</h1>
          </Slide>
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <p>
            Enjoy our news revolving only around the best events all over the
            world. See what is trending and what is fresh in the world of
            events.
          </p>
          </Slide>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12} className={classes.newscontainer}>
            <div className={classes.newsgrid}>
              <Typography variant="h6" className={classes.curation}>
                Our News Curation
              </Typography>
              <News data={allNews} />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.load}>
          <ButtonWithBackdrop
            label="Load More"
            click={handleSubmit}
            open={open}
          />
        </Grid>
      </Container>
    </>
  );
}
