import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  amount: {
    backgroundColor: "#fff",
    color: "#000000",
    borderRadius: 5,
    padding: 5,
    position: "relative",
    top: -50,
    left: 183,
  },
  red: {
    color: "red",
  },
  bg: {
    padding: "",
    width: "100%",
  },
  bg1: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    textAlign: "left",
    padding: 5,
    width: "100%",
    height: 200,
    font: "normal normal bold 16px/19px Work Sans",
  },
  learn: {
    float: "right",
    height: 30,
    backgroundColor: "orangeRed",
    border: "none",
    color: "white",
  },
  flex: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  flex2: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    height: 200,
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: "cover",
  },
  padding: {
    paddingLeft: "1rem",
  },
  flex3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flex4: {
    display: "flex",
    justifyContent: "space-about",
    paddingTop: "1rem",
  },
  bgAmount: {
    backgroundColor: "#fff",
    padding: ".5rem 1rem",
    borderRadius: 5,
    marginBottom: 5,
  },
  date: {
    color: "#F06E38",
    font: "normal normal bold 16px/19px Work Sans",
  },
  avatarItem: {
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid white",
  },
  experience: {
    display: "flex",
    justifyContent: "space-between",
  },
  edit: {
    height: 30,
    color: "#F06E38",
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
  },
  level: {
    color: "#F06E38",
  },
  approval: {
    color: "#F06E38",
  },

  status: {
    display: "flex",
    justifyContent: "space-between",
  },
  delete: {
    width: 70,
    color: "#F06E38",
    border: "1px solid #F06E38",
    backgroundColor: "transparent",
    borderRadius: 5,
    cursor: "pointer",
  },
  review: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  publish: {
    width: 70,
    color: "#F06E38",
    border: "1px solid #F06E38",
    backgroundColor: "transparent",
    borderRadius: 5,
    cursor: "pointer",
  },
});

export default function ImgMediaCard(props) {
  const [like, SetLike] = useState(false);
  const classes = useStyles(props);

  return (
    <section className={classes.flex} onClick={props.click}>
      <div className={clsx(classes.bg)}>
        <div className={classes.flex2}>
          <div className={classes.flex3}>
            <div className={classes.flex4}>
              <div>
                {!like && (
                  <Avatar className={classes.avatarItem}>
                    <FavoriteBorderIcon onClick={() => SetLike(!like)} />
                  </Avatar>
                )}
                {like && (
                  <Avatar className={classes.avatarItem}>
                    <FavoriteIcon
                      onClick={() => SetLike(!like)}
                      color="error"
                    />
                  </Avatar>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Paper className={classes.bg1}>
        <p className={classes.date}>{props.date}</p>
        <p>{props.title}</p>
        <p>{props.content}</p>
        <div className={classes.review}>
          {props.delete && (
            <button className={classes.delete}>{props.delete}</button>
          )}
          {props.edit && <button className={classes.edit}>{props.edit}</button>}
        </div>
        <div className={classes.review}>
          {props.publish && (
            <button className={classes.publish}>{props.publish}</button>
          )}
          {props.status && <p className={classes.edit}>{props.status}</p>}
        </div>
      </Paper>
    </section>
  );
}
