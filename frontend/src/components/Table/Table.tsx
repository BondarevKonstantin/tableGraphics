import React, { useState, useEffect } from 'react';
import { formatDate, checkFalseDate, checkDateSequence } from './Table.utils';
import './Table.scss';

import TechButtons from './components/TechButtons';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type RetentionDate = {
  registrationDate: string;
  lastActivityDate: string;
};

function createData(registrationDate: Date, lastActivityDate: Date) {
  return { registrationDate, lastActivityDate };
}

export const RetentionTable: React.FC = () => {
  const [tableRows, setTableRows] = useState<RetentionDate[]>([
    { registrationDate: '', lastActivityDate: '' },
  ]);

  const handleInputChange = (e: any, index: number) => {
    const { name, value } = e.target!;
    const rows: any = [...tableRows];
    rows[index][name] = value;
    setTableRows(rows);
  };

  useEffect(() => {
    const dateFormat = /^\d{2}\.\d{2}\.\d{4}$/;
    const { registrationDate, lastActivityDate } = tableRows[
      tableRows.length - 1
    ];

    if (
      dateFormat.test(registrationDate) &&
      dateFormat.test(lastActivityDate)
    ) {
      if (
        checkFalseDate(registrationDate) ||
        checkFalseDate(lastActivityDate)
      ) {
        return;
      }

      if (!checkDateSequence(registrationDate, lastActivityDate)) return;

      const newField = { registrationDate: '', lastActivityDate: '' };

      setTableRows([...tableRows, newField]);
    }
  }, [tableRows]);

  return (
    <div className="Table-container">
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>UserID</TableCell>
              <TableCell>Date Registration</TableCell>
              <TableCell>Date Last Activity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row, idx) => {
              return (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {idx + 1}
                  </TableCell>
                  {/* <TableCell>{formatDate(row.registrationDate)}</TableCell>
              <TableCell>{formatDate(row.lastActivityDate)}</TableCell> */}

                  <TableCell>
                    <input
                      name="registrationDate"
                      value={row.registrationDate}
                      onChange={(e) => handleInputChange(e, idx)}
                    />
                  </TableCell>
                  <TableCell>
                    <input
                      name="lastActivityDate"
                      value={row.lastActivityDate}
                      onChange={(e) => handleInputChange(e, idx)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TechButtons />
    </div>
  );
};
