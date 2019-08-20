import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function PrescriptionDrugDeductibles({ plans, classes }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section">
          {plan.RXDEDUCTIBLE} deductible
        </TableCell>
      ))}
    </TableRow>
  )
}
