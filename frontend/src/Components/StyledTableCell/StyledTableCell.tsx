import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    border: "1px solid black",
    fontSize: 16,
    fontStyle: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    border: "1px solid black",
  },
}));

export default StyledTableCell;
