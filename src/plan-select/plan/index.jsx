import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { capitalize } from '../../modules/string'

export default function Plan(props) {
  return (
    <div>
      <div className={props.classes.topRow + ' cell'}>
        <h2>{props.NAME}</h2>

        <div>
          {props.SUBNAME} ${props.PREMIUM}/month
        </div>

        <div>
          Pay low premiums. Once you've hit the deductible, split the costs with
          Simplete until you reach the out-of-pocket maximum.
        </div>

        <div>
          <Button
            variant="outlined"
            color="primary"
            className={props.classes.button}
          >
            View Details
          </Button>
        </div>
      </div>

      <div className="cell-heading">
        <h3>{props.column === 'left' ? 'Provider Network' : ''}&nbsp;</h3>
      </div>

      <div>
        <div
          className={`${
            props.classes['feature' + capitalize(props.column) + 'Column']
          } cell`}
        >
          <a href="#">Find a Provider</a> in {props.NAME}
        </div>
      </div>

      <div className="cell-heading">
        <h3>{props.column === 'left' ? 'Medical Deductible' : ''}&nbsp;</h3>
      </div>

      <div>
        <div
          className={`${
            props.classes['feature' + capitalize(props.column) + 'Column']
          } cell`}
        >
          $0 deductible
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
