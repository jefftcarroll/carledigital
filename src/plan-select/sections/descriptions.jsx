import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function Descriptions({ plans }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section no-bottom-border">
          Pay low premiums. Once you've hit the deductible, split the costs with
          Simplete until you reach the out-of-pocket maximum.
        </TableCell>
      ))}
    </TableRow>
  )
}
