import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function SubNames({ plans }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section no-bottom-border">
          <div className="flex-container">
            <div className="left">{plans[0].SUBNAME}</div>
            <div className="right">${plans[0].PREMIUM}/month</div>
          </div>
        </TableCell>
      ))}
    </TableRow>
  )
}
