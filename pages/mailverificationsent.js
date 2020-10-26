import React from 'react';
import { withRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Container, Button } from '@material-ui/core';
import { Header } from "../common";

const useStyles = makeStyles((theme) => ({
    Paper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 140,
        height: 400
    },

    Congrats: {
        marginTop: 50,
        marginBottom: 60
    },
    image: {
        width: 150,
        height: 150
    },
    button: {
        marginBottom: '20',
        color: 'white',
        borderRadius: 5
    }
  }));


function Mailverificationsent(props) {
    const  handleResend = () => {
        const { router } = props;
        console.log('router', router);
    }
    const classes = useStyles();
    return (
        <div>
            <Header />
            <Container maxWidth='md'>
                <div>
                <Paper elevation='3' className={classes.Paper}>
                    <div>
                        <img src='/images/emailVerify.png' className={classes.image}/>
                    </div>
                    <div>
                        <Typography variant='h4' >
                            Email Verification
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h6' className={classes.Congrats}>
                            A verification link has been sent the email provided.
                        </Typography>
                    </div>
                    <div style={{ background: "#FF7235", }}>
                        <Button color="primary" className={classes.button} >
                            Resend Link
                        </Button>
                    </div>
                </Paper>
                </div>
            </Container>
        </div>
    )
}

export default Mailverificationsent
