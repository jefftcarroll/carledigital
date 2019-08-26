import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import { tierLabel } from '../../modules/string'

export default function BenefitTiers1({ plans, classes, tiers }) {
  function addPlanTier(acc, plan, key, i) {
    if (plan[key] && plan[key].length > 0) {
      acc.push({
        limit: plan[key],
        label: tierLabel(key, plan[key], i),
      })
    } else {
      acc.push({
        limit: '',
        label: '',
      })
    }
    return acc
  }
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section">
          {tiers
            .reduce((acc, key, i) => addPlanTier(acc, plan, key, i), [])
            .map(item => (
              <p>
                {item.limit} {item.label} &nbsp;
              </p>
            ))}
        </TableCell>
      ))}
    </TableRow>
  )
}
