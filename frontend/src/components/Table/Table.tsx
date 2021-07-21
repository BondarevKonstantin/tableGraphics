import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCalculationsDisplayed, setDataArray } from '../../redux/ducks/app';
import './Table.scss';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import TechButtons from './components/TechButtons';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const RetentionTable: React.FC = () => {
  const [tableRows, setTableRows] = useState<RetentionDate[]>([
    { registrationDate: null, lastActivityDate: null },
  ]);

  const dispatch = useDispatch();

  const handleInputChange = (
    name: RetentionDateField,
    date: Date | null,
    index: number
  ) => {
    const rows: RetentionDate[] = [...tableRows];
    rows[index][name] = date;
    setTableRows(rows);
  };

  const handleCalc = () => {
    dispatch(setDataArray(tableRows.slice(0, -1)));
    dispatch(setCalculationsDisplayed(true));
  };

  useEffect(() => {
    const { registrationDate, lastActivityDate } = tableRows[
      tableRows.length - 1
    ];

    if (
      registrationDate &&
      lastActivityDate &&
      registrationDate < lastActivityDate &&
      registrationDate <= new Date() &&
      lastActivityDate <= new Date()
    ) {
      const newField = { registrationDate: null, lastActivityDate: null };

      setTableRows([...tableRows, newField]);
    }
  }, [tableRows]);

  return (
    <div className="Table-container">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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

                    <TableCell>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        label="Registration Date"
                        value={row.registrationDate}
                        onChange={(date) =>
                          handleInputChange('registrationDate', date, idx)
                        }
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </TableCell>

                    <TableCell>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        label="Last Activity Date"
                        value={row.lastActivityDate}
                        onChange={(date) =>
                          handleInputChange('lastActivityDate', date, idx)
                        }
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TechButtons onCalc={handleCalc} disabled={tableRows.length === 1} />
      </MuiPickersUtilsProvider>
    </div>
  );
};
