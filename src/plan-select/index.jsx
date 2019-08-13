import React from 'react'

import Grid from '@material-ui/core/grid'

import Plan from './plan'

import plans from '../data/plans.json'

export default function PlanSelect() {
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="stretch">
      {plans.map(json => (
        <Plan key={json.name} {...json} />
      ))}
    </Grid>
  )
}
