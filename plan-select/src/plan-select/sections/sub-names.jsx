import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function SubNames({ plans }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section no-bottom-border">
          <div className="flex-container">
            <div className="left body18">{plan.SUBNAME}</div>
            <div className="right body18 text-plum">{plan.PREMIUM}/month</div>
          </div>
        </TableCell>
      ))}
    </TableRow>
  )
}
