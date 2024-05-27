import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const CelulaCSS = styled(TableCell)(
  ({ linhaWidth }: { linhaWidth?: string }) => ({
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
      maxWidth: linhaWidth || "50px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  })
);

interface Props {
  headers: (string | JSX.Element)[];
  rows: (string | JSX.Element)[][];
  linhaWidth?: string;
}

const Tabela = ({ headers, rows, linhaWidth }: Props) => {
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
    <TableContainer
      component={Paper}
      sx={{ margin: "20px 0", minWidth: "282px" }}
    >
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
                  <CelulaCSS key={cellIndex} linhaWidth={linhaWidth}>
                    {cell}
                  </CelulaCSS>
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
