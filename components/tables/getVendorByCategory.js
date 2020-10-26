import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Paper, Container} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useRouter } from 'next/router';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  action: {
    backgroundColor: "transparent",
    border: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

      const useStyles = makeStyles(theme => ({
        table: {
            marginTop: theme.spacing(2),
            '& thead th': {
                fontWeight: '600',
                color: '#000',
                backgroundColor: '#BAB7B7',
                fontSize:14,
                height:70,
            },
            '& tbody td': {
                fontWeight: '400',
                fontSize:14,
            },
            '& tbody tr:hover': {
                backgroundColor: 'grey',
                cursor: 'pointer',
            },
        },
        paper:{
            padding:'3rem',
            marginBottom:12
        }
    }))

export default function CustomizedTables({category}) {
    const router= useRouter()
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.paper}>
        <h3>PHOTOGRAPHERS</h3>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Select</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Mobile Number</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {category.map((row) => (
            <StyledTableRow key={row.id}>
                 <StyledTableCell>
                <input
                  type='checkbox'
                  name='select'
                 />
                </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.mobilenumber}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}