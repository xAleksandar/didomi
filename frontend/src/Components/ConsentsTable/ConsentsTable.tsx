import React from "react";
import lang from "../../lib/lang/en";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableRow, StyledTableCell } from "..";
import { UserEntry } from "../../types/UserEntry.type";

type Props = {
  data: UserEntry[];
};

const ConsentsTable = (props: Props) => {
  const { data } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{lang.commonName}</StyledTableCell>
            <StyledTableCell align="right">{lang.commonEmail}</StyledTableCell>
            <StyledTableCell align="right">
              {lang.consentGivenFor}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={`${row.name}${index}`}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">
                {row.consents.join(", ")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConsentsTable;
