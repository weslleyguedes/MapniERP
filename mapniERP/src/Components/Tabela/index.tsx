import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const CelulaCSS = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    textAlign: "center",
    color: "white",
    backgroundColor: "var(--preto-padrao)",
    fontSize: "1em",
    fontWeight: "bold",

  },
  [`&.${tableCellClasses.body}`]: {
    textAlign: "center",
    fontSize: "1em",
    padding:'10px 25px',
    minWidth:'100px'
  },
}));

interface Props {
  headers: (string | JSX.Element)[];
  rows: (string | JSX.Element)[][];
  margin?: string;
  width?: string;
}

const Tabela = ({ headers, rows, margin, width }: Props) => {
  const [noData, setNoData] = useState("");

  useEffect(() => {
    // Atualize as linhas da tabela quando as props 'rows' mudarem
    if (rows.length === 0) {
      setNoData("Não há dados disponíveis");
    } else {
      setNoData("");
    }
  }, [rows]);

  return (
    <TableContainer style={{ margin, width }} component={Paper}>
      <Table aria-label="tabela-customizada">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <CelulaCSS key={index}>{header}</CelulaCSS>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <CelulaCSS key={cellIndex}>{cell}</CelulaCSS>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <CelulaCSS colSpan={headers.length} align="center">
                {noData}
              </CelulaCSS>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tabela;
