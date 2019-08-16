import React from 'react'
import { capitalize } from '../../modules/string'

export default function PlanSection({ classes, column, title, children }) {
  return (
    <>
      <div className="cell-heading">
        <h3>{column === 'left' ? title : ''}&nbsp;</h3>
      </div>

      <div>
        <div
          className={`${
            classes['feature' + capitalize(column) + 'Column']
          } cell`}
        >
          {children}
        </div>
      </div>
    </>
  )
}
