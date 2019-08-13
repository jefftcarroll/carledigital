import React from 'react'

import Grid from '@material-ui/core/grid'
import queryString from 'query-string'

import Plan from './plan'

import plans from '../data/plans.json'

export default function PlanSelect({}) {
  function filterPlans(plans) {
    const keys = ['plan1', 'plan2', 'plan3']
    const selections = queryString.parse(window.location.search)
    const selectedPlans = keys.map(key => selections[key])

    return plans.filter(plan => selectedPlans.includes(plan.ID))
  }
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="stretch">
      {filterPlans(plans).map(json => (
        <Plan key={json.name} {...json} />
      ))}
    </Grid>
  )
}
