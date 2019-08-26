import React, { useState } from 'react'
import {Tab, Tabs, Table, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function PlanDetail({ plan, classes }) {
  const tabs = ['Overview', 'Medical', 'Pharmacy']
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return <div className="wrapper">
    <div className="tabs">
      <Tabs
        value={selectedTabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={(e, index) => setSelectedTabIndex(index)}
      >
        {
          tabs.map(label => <Tab  label={label} />)
        }
      </Tabs>
    </div>
    <h1>{plan.NAME}</h1>

    <Table className={classes.table}>
      <TableBody>
        <TableRow>
          <TableCell>Monthly Premium</TableCell>
          <TableCell>{plan.PREMIUM}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Medical Deductible</TableCell>
          <TableCell>{plan.MEDDEDUCTIBLE}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Prescription Drug Deductible</TableCell>
          <TableCell>{plan.RXDEDUCTIBLE}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>Yearly Out-of-Pocket Max</TableCell>
          <TableCell>
            <p>Tier 1: {plan.LIMIT_t1}</p>
            <p>Tier 2: {plan.LIMIT_t2 || 'NA'}</p>
            <p>Out of Network: {plan.LIMIT_oon || 'NA'}</p>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
}