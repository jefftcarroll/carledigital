import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import queryString from 'query-string'

import Plan from './plan'

import plans from '../data/plans.json'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
  },
  primaryButton: {
    backgroundColor: '#572c80',
  },
  listHeadingContainer: {
    height: 40,
    position: 'fixed',
    top: 0,
    zIndex: 100,
  },
  listItemContainer: {
    marginTop: 40,
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
}))

export default function PlanSelect({}) {
  const classes = useStyles()

  function filterPlans(plans) {
    const keys = ['plan1', 'plan2', 'plan3']
    const selections = queryString.parse(window.location.search)
    const selectedPlans = keys.map(key => selections[key])

    return plans.filter(plan => selectedPlans.includes(plan.ID))
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.listHeadingContainer}
      >
        {filterPlans(plans).map(json => (
          <Grid item key={json.ID} xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.primaryButton}
            >
              {json.NAME}
            </Button>
          </Grid>
        ))}
      </Grid>

      <div className={classes.listItemContainer}>
        <Grid container className={classes.listItems}>
          {filterPlans(plans).map(json => (
            <Grid item key={json.name} xs={12} sm={6} md={4}>
              <Plan {...json} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
