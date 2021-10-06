import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData("Gissi", 159, 6.0, 24, 4.0),
  createData("Castiglione", 237, 9.0, 37, 4.3),
  createData("Rocca", 262, 16.0, 24, 6.0),
  createData("Liscia", 305, 3.7, 67, 4.3),
  createData("Carunchio", 356, 16.0, 49, 3.9),
]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

export default function CustomizedTables() {
  const classes = useStyles()
  return (
    <>
     
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Paese</StyledTableCell>
                <StyledTableCell align="right">Giorno</StyledTableCell>
                <StyledTableCell align="right">Orari</StyledTableCell>
                <StyledTableCell align="right">...</StyledTableCell>
                <StyledTableCell align="right">...</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}
