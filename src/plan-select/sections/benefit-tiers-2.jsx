import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import { tierLabel } from '../../modules/string'

export default function BenefitTiers2({ plans, classes, tiers }) {
  function addPlanTier(acc, plan, key, i) {
    if (plan[key] && plan[key].length > 0) {
      acc.push(tierLabel(key, plan[key], i))
      plan[key].forEach(line => {
        acc.push(line)
      })
    } else {
      acc.push('')
    }
    return acc
  }
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell
          key={plan.ID}
          className="section"
          style={{ verticalAlign: 'top' }}
        >
          {tiers
            .reduce((acc, key, i) => addPlanTier(acc, plan, key, i), [])
            .map(item => (
              <p>{item} &nbsp;</p>
            ))}
        </TableCell>
      ))}
    </TableRow>
  )
}
