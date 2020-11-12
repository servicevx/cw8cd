import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Pie from '../Reports/Doughnut';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    table: {
        maxWidth: 1300,
    },
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

/*function priceRow(qty, unit) {
  return qty * unit;
}*/

function createRow(a, b, c, d, f, g, h, i)
// const price = priceRow(b, c);
{
    return { a, b, c, d, f, g, h, i };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
    createRow('1', '1.1', 'Demontāžas darbi', 9183.28, 6539.18, 274.68, 2369.42, 653.9175),
    createRow('2', '1.2', 'Sienas', 3196.79, 1587.2, 1495.81, 113.78, 158.7184),
    createRow('3', '1.3', 'Grīdas', 3143.82, 1562.61, 1488.2, 93.01, 156.261),
    createRow('4', '1.4', 'Logi, durvis', 3188, 761, 2352, 75, 76.1),
    createRow('5', '1.5', 'Apdares darbi', 54635.72, 28013.58, 24737.3, 1884.84, 2801.358),
    createRow('6', '1.6', 'Dažādi darbi', 844.96, 328.82, 424.88, 91.26, 32.882),
    createRow('7', '2.1', 'Apkure, ventilācija, dzesēšana', 56599.37, 11926.12, 43478.97, 1194.28, 681.4),
    createRow('8', '2.2', 'Ūdensvads un kanalizācija', 8124.69, 4155.94, 3483.83, 484.92, 237.48),
    createRow('9', '2.3', 'Elektroapgāde', 28002.1, 4703.15, 22828.59, 470.36, 268.75),
    createRow('10', '2.4', 'Elektronisko sakaru tīkli', 22360.11, 7257.63, 14394.51, 707.97, 413.95),
    createRow('11', '2.5', 'Ugunsgrēka atklāšanas un trauksmes signalizācija', 3400.64, 1583.02, 1660.36, 157.26, 90.4),
    createRow('12', '3.1', 'Iekārtas un  iebūvētās mēbeles', 41837.43, 5366.22, 35928.9, 542.31, 385.24),

];



const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>

                    <TableRow>
                        <TableCell align="right">Nr.p.k.</TableCell>
                        <TableCell align="right">Kods, tāmes Nr.</TableCell>
                        <TableCell align="right">Darba veids vai konstruktīvā elementa nosaukums</TableCell>
                        <TableCell align="right">Tāmes izmaksas </TableCell>
                        <TableCell align="right">Darba alga</TableCell>
                        <TableCell align="right">Būvizstrādājumi</TableCell>
                        <TableCell align="right">Mehānismi </TableCell>
                        <TableCell align="right">Darbietilpība c/h</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.a}>
                            <TableCell>{row.a}</TableCell>
                            <TableCell align="right">{row.b}</TableCell>
                            <TableCell align="right">{row.c}</TableCell>
                            <TableCell align="right">{ccyFormat(row.d)}</TableCell>
                            <TableCell align="right">{ccyFormat(row.f)}</TableCell>
                            <TableCell align="right">{ccyFormat(row.g)}</TableCell>
                            <TableCell align="right">{ccyFormat(row.h)}</TableCell>
                            <TableCell align="right">{ccyFormat(row.i)}</TableCell>

                        </TableRow>
                    ))}

                    <TableRow>
 <TableCell colSpan={5}></TableCell>
                        <TableCell >Kopā:</TableCell>
                        <TableCell colSpan={2} align="right"> 234,516.91 </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={5}></TableCell>
                        <TableCell colSpan={1}>Virsizdevumi</TableCell>
                        <TableCell align="right"> 6% </TableCell>
                        <TableCell align="right"> 14,071.01 </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={5}></TableCell>
                        <TableCell >t.sk. darba aizsardzība</TableCell>
                        <TableCell  colSpan={2}  align="right"> 703.55 </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={5}></TableCell>
                        <TableCell >Peļņa</TableCell>
                        <TableCell align="right"> 4% </TableCell>
                        <TableCell align="right">  9,380.68  </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell colSpan={5}></TableCell>
                        <TableCell >PAVISAM KOPĀ:		</TableCell>
                        <TableCell  colSpan={2} align="right">  257,968.60 </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

        
    );
}


  

/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 800,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Kopā:', '',  234516.91 ),
  createData('Virsizdevumi', 6,  14071.01  ),
  createData('t.sk. darba aizsardzība', '',  703.55   ),
  createData('Peļņa', 4,  9380.68   ),
  createData('PAVISAM KOPĀ:', '',  257968.60   ),
];

export default function Total() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Kopsavilkums</TableCell>
            <TableCell align="right">%</TableCell>
            <TableCell align="right">EUR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row"> {row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
*/