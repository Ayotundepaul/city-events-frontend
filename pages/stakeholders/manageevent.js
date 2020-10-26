import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import HostandVendorDashBoard from "../../components/dashboards/eventHostAndVendor/dashboard";
import ManageEvents from '../../components/createEvents/action/manageEvents';
import Grid from '@material-ui/core/Grid';


const data = [
    {
      id: "trhd",
      title: "Warrior Apparels",
      content: "Getting your Foot in the door",
      image: "/images/corp1.jpg",
      amount: "free",
      date: "Thur, Sep 30, 2020",
      status: "Approved",
      edit: "Edit",
      delete: "Delete",
      publish: "publish",
    },
    {
      id: "erds",
      title: "Alison Courses:",
      content: "Marchine Learning and Statistics",
      image: "/images/corp3.jpg",
      amount: "free",
      date: "Thur, Jul 30, 2020",
      status: "Approved",
      edit: "Edit",
      delete: "Delete",
      publish: "publish",
    },
    {
      id: "nmjh",
      title: "Plural Sight:",
      content: "SMEs -The Future of Africa",
      image: "/images/corp5.jpg",
      amount: "free",
      date: "Thur, Nov 30, 2020",
      status: "Approved",
      edit: "Edit",
      delete: "Delete",
      publish: "Publish",
    },
  ];

const Manageevent = () => {
      return (
    <HostandVendorDashBoard>
         <Grid container spacing={3}>
              <Grid item xs={12}>
                <h4>Review Events Created</h4>
              </Grid>
              {data.map((current) => (
                <Grid item xs={12} sm={6} md={4}>
                  <ManageEvents
                    image={current.image}
                    title={current.title}
                    content={current.content}
                    date={current.date}
                    level={current.level}
                    amount={current.amount}
                    edit={current.edit}
                    delete={current.delete}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h4>Check Approval Status</h4>
              </Grid>
              {data.map((current) => (
                <Grid item xs={12} sm={6} md={4}>
                  <ManageEvents
                    image={current.image}
                    title={current.title}
                    content={current.content}
                    date={current.date}
                    amount={current.amount}
                    publish={current.publish}
                    status={current.status}
                  />
                </Grid>
              ))}
            </Grid>
    </HostandVendorDashBoard>
  );
};
export default Manageevent;
