import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function Names({ plans }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section">
          <h4>
            <a
              href={
                `https://medicare.healthalliance.org/find-care`
              }
            >
              Find a Provider
            </a>{' '}
            in {plan.NAME}
          </h4>
        </TableCell>
      ))}
    </TableRow>
  )
}
