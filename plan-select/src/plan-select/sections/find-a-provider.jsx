import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function Names({ plans }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section">
          <h3>
            <a
              href={
                `https://simplete.org/find-care?directory=${plan.DIRECTORY}`
              }
            >
              Find a Provider
            </a>{' '}
            in {plan.NAME}
          </h3>
        </TableCell>
      ))}
    </TableRow>
  )
}
