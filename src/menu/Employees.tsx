import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (
  name: string,
  position: string,
  place: string,
) => ({name, position, place});

const rows = [
  createData('Madalynn Houston','Технический специалист', 'IT отдел',),
  createData('Kynlee Wu','Администратор', 'Отдел тех. поддержки',),
  createData('Kyson Griffith','Внешняя интеграция', 'IT отдел',),
  createData('Lochlan Butler','Оператор', 'Отдел тех. поддержки',),
  createData('Maxine Singh','Копирайтер', 'Отдел тех. поддержки',),
];

export const Employees = () => (
  <TableContainer component={Paper}>
    <Table sx={{minWidth: 650}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Сотрудник</TableCell>
          <TableCell >Роль</TableCell>
          <TableCell >Отдел</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell >{row.position}</TableCell>
            <TableCell >{row.place}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);