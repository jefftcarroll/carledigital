import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function Heading({ plans, text, classes }) {
  return (
    <TableRow>
      <TableCell className={classes.tsectionhead} colSpan={plans.length}>
        <h3>{text}</h3>
      </TableCell>
    </TableRow>
  )
}
