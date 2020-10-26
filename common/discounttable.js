import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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

function createData(sn, token, discount, limit, usage, action) {
  return { sn, token, discount, limit, usage, action };
}
const rows = [
  {
    id: "1",
    sn: 1,
    token: "Get unique token",
    discount: "15%",
    limit: "Unlimited",
    usage: "4.0",
  },
  {
    id: "2",
    sn: 2,
    token: "Get unique token",
    discount: "15%",
    limit: "Unlimited",
    usage: "4.0",
  },
  {
    id: "3",
    sn: 3,
    token: "Get unique token",
    discount: "15%",
    limit: "Unlimited",
    usage: "4.0",
  },
  {
    id: "4",
    sn: 4,
    token: "Get unique token",
    discount: "15%",
    limit: "Unlimited",
    usage: "4.0",
  },
  {
    id: "5",
    sn: 5,
    token: "Get unique token",
    discount: "15%",
    limit: "Unlimited",
    usage: "4.0",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
    const router= useRouter()
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Token</StyledTableCell>
            <StyledTableCell>Discount</StyledTableCell>
            <StyledTableCell>Limit</StyledTableCell>
            <StyledTableCell>Usage</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.sn}
              </StyledTableCell>
              <StyledTableCell onClick={() => console.log(console.log(row.id))} style={{cursor:'pointer'}} >{row.token}</StyledTableCell>
              <StyledTableCell>{row.discount}</StyledTableCell>
              <StyledTableCell>{row.limit}</StyledTableCell>
              <StyledTableCell>{row.usage}</StyledTableCell>
              <StyledTableCell>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <EditIcon color="primary" style={{cursor:'pointer'}}onClick={() => router.push(`/stakeholders/${row.id}`)}/>
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <DeleteIcon color="error" />
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
