import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (
  sender: string,
  cardNumber: number,
  sum: number,
) => ({sender, cardNumber, sum});

const rows = [
  createData('Madalynn Houston',9090451000030097, 159,),
  createData('Kynlee Wu',9090451000030690, 237,),
  createData('Kyson Griffith',8600451000030954, 262,),
  createData('Lochlan Butler',8600451000038574, 305,),
  createData('Maxine Singh',9090451000034582, 356,),
];

export const Transactions = () => (
  <TableContainer component={Paper}>
    <Table sx={{minWidth: 650}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Получатель</TableCell>
          <TableCell >PAN карты</TableCell>
          <TableCell >Сумма транзакции</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.sender}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
          >
            <TableCell component="th" scope="row">
              {row.sender}
            </TableCell>
            <TableCell >{row.cardNumber}</TableCell>
            <TableCell >{row.sum}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);