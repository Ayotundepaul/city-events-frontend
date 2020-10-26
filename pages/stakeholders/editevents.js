import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Avatar } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import { ButtonWithBackdrop, MyDialog } from "../../common";
import HostandVendorDashBoard from "../../components/dashboards/eventHostAndVendor/dashboard";
import Tags from "../../common/tags";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 40,
  },
  name: {
    font: "normal normal bold 20px/24px Work Sans",
  },
  edit: {
    background: "#F5F5F5 0% 0% no-repeat padding-box",
    borderRadius: 12,
    padding: 20,
    width: "70%",
    height: "53px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  description: {
    background: "#F5F5F5 0% 0% no-repeat padding-box",
    borderRadius: 12,
    padding: 20,
    width: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      width: "100%",
    },
  },
  editdesc: {
    paddingRight: 100,
    width: "85%",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      width: "100%",
    },
  },
  avatar: {
    color: "#000",
    background: "#fff",
  },
  cancel: {
    color: "red",
  },
  image: {
    backgroundImage: "url('/images/serviceimg.jpg')",
    height: 185,
    width: "85%",
    borderRadius: 10,
    backgroundSize: "cover",
    backgroundOrigin: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      width: "100%",
    },
  },
  save: {
    marginBottom: "4rem",
    width: "85%",
    marginTop: "1rem",
    // border:'1px solid green'
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    width: "25%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      margin: "0 auto",
    },
  },
  datepicker: {
    border: "none",
    width: 200,
    height: 45,
    borderRadius: 5,
  },
  icon: {
  display: "flex",
  justifyContent: "flex-end",
  
  },
}));

function EditServices() {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [openDialog, setOpenDialog] = useState();
  const [positiveDialog, setPositiveDialog] = useState(true);
  const [bussinessName, setBussinessName] = useState("Caleb Sommelier's & Co.");
  const [editBussinessName, setEditBussinessName] = useState(false);
  const [
    description,
    setDescription,
  ] = useState(`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Nam architecto ducimus tempora optio suscipit aut voluptatem et, unde asperiores ad nobis. Corporis, sequi
    eius unde ducimus tenetur similique eos aspernatur?`);
  const [editDescription, setEditDescription] = useState(false);

  const handleSave = () => {
    setOpen(true),
      setTimeout(() => {
        setOpen(false);
        setOpenDialog(true);
        setDialogTitle("Your service has been updated successfully!");
        setDialogMessage("You can manage your event from your dashboard");
      }, 1000);
  };

  const classes = useStyles();

  return (
    <div>
      <HostandVendorDashBoard>
        <Zoom in={true}>
          <Grid container spacing={3} className={classes.root}>
            <MyDialog
              title={dialogTitle}
              openDialog={openDialog}
              positiveDialog={positiveDialog}
              onClose={() => setOpenDialog(false)}
            >
              {dialogMessage}
            </MyDialog>
            {/* <Grid item xs={12} md={6}>
              <p className={classes.name}>Business Name</p>
              <div className={classes.edit}>
                {!editBussinessName && <div>{bussinessName}</div>}
                {editBussinessName && (
                  <TextField
                    id="standard-basic"
                    fullWidth
                    value={bussinessName}
                    onChange={(e) => setBussinessName(e.target.value)}
                  />
                )}
                {!editBussinessName && (
                  <Avatar
                    className={classes.avatar}
                    onClick={() => setEditBussinessName(!editBussinessName)}
                  >
                    <EditIcon />
                  </Avatar>
                )}
                {editBussinessName && (
                  <Avatar
                    className={classes.avatar}
                    onClick={() => setEditBussinessName(!editBussinessName)}
                  >
                    <CancelIcon className={classes.cancel} />
                  </Avatar>
                )}
              </div>
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <p className={classes.name}>Event Name</p>
              <div className={classes.edit}>
                <div>Turn Up With DJ Cuppy</div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.name}>Description</p>
              <div className={classes.description}>
                <div className={classes.editdesc}>
                  {!editDescription && <div>{description}</div>}
                  {editDescription && (
                    <Editor
                    initialValue={`<p>${description}</p>`}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image', 
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount'
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | help'
                    }}
                    onChange={handleEditorChange}
                  />
                 )}
               </div>
                {!editDescription && (
                  <Avatar
                    className={classes.avatar}
                    onClick={() => setEditDescription(!editDescription)}
                  >
                    <EditIcon />
                  </Avatar>
                )}
                {editDescription && (
                  <Avatar
                    className={classes.avatar}
                    onClick={() => setEditDescription(!editDescription)}
                  >
                    <CancelIcon className={classes.cancel} />
                  </Avatar>
                )}
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <p className={classes.name}>Image</p>
              <div className={classes.image}>
                <div className={classes.icon}>
                  <Avatar style={{backgroundColor:"white", color:"black"}}>
                    <EditIcon color="black"/>
                  </Avatar>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <p className={classes.name}>Fees</p>
              <div className={classes.edit}>
                <div>Flat Project rate</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <p className={classes.name}>Tags</p>
              {/* <div className={classes.edit}> */}
              <Tags />
              {/* </div> */}
            </Grid>
            <Grid item xs={12} md={4}>
              <p className={classes.name}>Total Sign Ups</p>
              <div className={classes.edit}>
                <div>120,000+</div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <p className={classes.name}>Event location</p>
              <div className={classes.edit}>
                <div>12, Osborne drive, Lekki...</div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <p className={classes.name}>Event Start Date</p>
              <div className={classes.edit}>
                <div>
                  <input
                    type="date"
                    default="08/10/2020"
                    className={classes.datepicker}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <p className={classes.name}>Event End Date</p>
              <div className={classes.edit}>
                <div>
                  <input
                    type="date"
                    default="08/10/2020"
                    className={classes.datepicker}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={2}>
              {" "}
            </Grid>
            <Grid item xs={12} className={classes.save}>
              <div className={classes.button}>
                <ButtonWithBackdrop
                  label="Update & Save"
                  click={handleSave}
                  open={open}
                />
              </div>
            </Grid>
          </Grid>
        </Zoom>
      </HostandVendorDashBoard>
    </div>
  );
}

export default EditServices;
