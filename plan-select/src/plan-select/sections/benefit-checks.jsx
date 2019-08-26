import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import CheckIcon from '../../icons/check'

export default function BenefitChecks({ plans, attr, classes }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section">
          {plans && parseInt(plan[attr]) === 1 ? (
            <CheckIcon color="primary" />
          ) : null}
          &nbsp;
        </TableCell>
      ))}
    </TableRow>
  )
}
