import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { capitalize } from '../../modules/string'

export default function Plan(props) {
  function pcpovLabel(key, value, i) {
    if (key === 'PCP_t1' || key === 'PCP_t2') {
      return `tier ${i}`
    } else if (key === 'PCP_oon') {
      return 'out-of-network'
    }
  }

  return (
    <div>
      <div className={props.classes.topRow + ' cell'}>
        <h2 className="plan">{props.NAME}</h2>

        <div className="flex-container">
          <div className="left">
            <h3 className="hmo">{props.SUBNAME}</h3>
          </div>
          <div className="right">
            <h3 className="hmo price">${props.PREMIUM}/month</h3>
          </div>
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
          <h3>
            <a href="#">Find a Provider</a> in {props.NAME}
          </h3>
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

      <div className="cell-heading">
        <h3>
          {props.column === 'left' ? 'Prescription Drugs Deductible' : ''}&nbsp;
        </h3>
      </div>

      <div>
        <div
          className={`${
            props.classes['feature' + capitalize(props.column) + 'Column']
          } cell`}
        >
          {props.RXDEDUCTIBLE} deductible
        </div>
      </div>

      <div className="cell-heading">
        <h3>{props.column === 'left' ? 'Yearly Limit' : ''}&nbsp;</h3>
      </div>

      <div>
        <div
          className={`${
            props.classes['feature' + capitalize(props.column) + 'Column']
          } cell`}
        >
          {['LIMIT_t1', 'LIMIT_t2', 'LIMIT_t3']
            .reduce((acc, key) => {
              if (props[key] && props[key].length > 0) acc.push(props[key])
              return acc
            }, [])
            .map(limit => (
              <p>{limit}</p>
            ))}
        </div>
      </div>

      <div className="cell-heading">
        <h3>
          {props.column === 'left' ? 'Primary Care Physician Office Visit' : ''}
          &nbsp;
        </h3>
      </div>

      <div>
        <div
          className={`${
            props.classes['feature' + capitalize(props.column) + 'Column']
          } cell`}
        >
          {['PCP_t1', 'PCP_t2', 'PCP_oon']
            .reduce((acc, key, i) => {
              if (props[key] && props[key].length > 0) {
                acc.push({
                  limit: props[key],
                  label: pcpovLabel(key, props[key], i),
                })
              } else {
                acc.push({
                  limit: '',
                  label: '',
                })
              }
              return acc
            }, [])
            .map(item => (
              <p>
                {item.limit} {item.label} &nbsp;
              </p>
            ))}
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
