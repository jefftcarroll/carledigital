import React from 'react'
import Button from '@material-ui/core/Button'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function ViewDetailsButtons({ plans, classes }) {
  return (
    <TableRow>
      {plans.map(plan => (
        <TableCell key={plan.ID} className="section">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() =>
              (document.location.href = `https://simplete.org/benefits?plan=${plan.ID}&page=shop`)
            }
          >
            View Details
          </Button>
        </TableCell>
      ))}
    </TableRow>
  )
}
