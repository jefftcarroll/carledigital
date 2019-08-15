import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import queryString from 'query-string'

import './styles.css'

import Theme from '../theme'
import Plan from './plan'

import plans from '../data/plans.json'

// https://www.figma.com/proto/J9Gdebpcb3grmnjchfc3Rm9F/Simplete-Website?node-id=340%3A5325&viewport=857%2C397%2C0.16888083517551422&scaling=min-zoom

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
  },
  topButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    boxSizing: 'border-box',
    textTransform: 'none',
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textTransform: 'none',
  },

  listHeadingContainer: {
    position: 'fixed',
    top: 0,
    zIndex: 100,
  },
  listItemContainer: {
    marginTop: theme.spacing(13),
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  topRow: {
    border: '1px solid #e2e2e2',
  },
  TopButtonCells: {
    borderTop: '1px solid #e2e2e2',
    borderLeft: '1px solid #e2e2e2',
    borderRight: '1px solid #e2e2e2',
  },
  featureLeftColumn: {
    borderBottom: '1px solid #e2e2e2',
    borderRight: '1px solid #e2e2e2',
  },
  featureMiddleColumn: {
    borderBottom: '1px solid #e2e2e2',
  },
  featureRightColumn: {
    borderBottom: '1px solid #e2e2e2',
    borderLeft: '1px solid #e2e2e2',
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

  function getColumnName(i) {
    if (i === 0) return 'left'
    if (i === 1) return 'middle'
    if (i === 2) return 'right'
  }

  return (
    <Theme>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.listHeadingContainer}
        >
          {filterPlans(plans).map((json, i) => (
            <Grid
              item
              key={json.ID}
              xs={12}
              sm={6}
              md={4}
              className={`${classes.TopButtonCells} cell-heading`}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.topButton}
              >
                Choose {json.NAME}
              </Button>
            </Grid>
          ))}
        </Grid>

        <div className={classes.listItemContainer}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={classes.listItems}
          >
            {filterPlans(plans).map((json, i) => (
              <Grid item key={json.name} xs={12} sm={6} md={4}>
                <Plan {...json} classes={classes} column={getColumnName(i)} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Theme>
  )
}
