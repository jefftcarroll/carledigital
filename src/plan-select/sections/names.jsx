import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function Names({ plans }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section no-bottom-border">
          <h3>{plan.NAME}</h3>
        </TableCell>
      ))}
    </TableRow>
  )
}
