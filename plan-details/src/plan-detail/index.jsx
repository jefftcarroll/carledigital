import React, { useState } from 'react'
import {
  Tab,
  Tabs,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Grid,
  Paper,
  Button,
  Icon,
} from '@material-ui/core'

import pdfIcon from './pdf-24.png'

function Shop({}) {
  return (
    <>
      <h3>How to Enroll</h3>
      <p>
        2020 Annual Enrollment starts Oct 15th. To enroll now you must qualify
        for a <a href="">Special Enollment Peroid</a>.
      </p>
      <div>
        <Button variant="contained" color="primary">
          Enroll now
        </Button>
      </div>

      <p>
        Our plans are only available in certain places. Make sure you live in
        our <a href="">service area</a>.
      </p>
    </>
  )
}

function View({}) {
  return (
    <>
      <h3>Take charge of your health</h3>
      <ul>
        <li>
          <a href="">Log in</a> to your member account to manage more plan
          details
        </li>
        <li>
          Download the <a href="">app</a>
        </li>
        <li>
          Visit with a doctor at 1-888-912-0904 or through the
          <a href="">member account</a>
          or <a href="">app</a>
        </li>
        <li>
          Get $360 for fitness with
          <a href="">Be Fit</a>
        </li>
        <li>
          Earn rewards with
          <a href="">Rally</a>
        </li>
        <li>
          <a href="">Track wellness activities</a> to earn up to $50
        </li>
        <li>
          Learn how <a href="">care coordination</a> can help you
        </li>
        <li>
          Traveling healthy with
          <a href="">Assist America</a>
        </li>
        <li>
          Save on <a href="">TruHearing Select</a> hearing aids
        </li>
      </ul>
    </>
  )
}

export default function PlanDetail({ plan, shopView, classes }) {
  const tabs = ['Overview', 'Medical', 'Pharmacy']
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return (
    <div className="wrapper">
      <div className="tabs">
        <Tabs
          value={selectedTabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, index) => setSelectedTabIndex(index)}
        >
          {tabs.map(label => (
            <Tab label={label} />
          ))}
        </Tabs>
      </div>

      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
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
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper className={classes.specialNote}>
            {shopView.toLowerCase() === 'shop' ? <Shop /> : <View />}
          </Paper>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Button variant="outlined">
            <img src={pdfIcon} />
            Evidence of Coverage
          </Button>

          <Button variant="outlined">
            <img src={pdfIcon} />
            Summary of Benefits
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <h2>Medical Benefits</h2>
          <p>
            This is an overview of what you pay for commonly used benefits $ =
            copay. % = coinsurance
          </p>

          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Tier 1</TableCell>
                <TableCell>Tier 2</TableCell>
                <TableCell>Out of Network</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>Primary Care Physician Office Visit</TableCell>
                <TableCell>{plan.PCP_t1}</TableCell>
                <TableCell>{plan.PCP_t2}</TableCell>
                <TableCell>{plan.PCP_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Specialist Office Visit</TableCell>
                <TableCell>{plan.SPECIALIST_t1}</TableCell>
                <TableCell>{plan.SPECIALIST_t2}</TableCell>
                <TableCell>{plan.SPECIALIST_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Physical Therapy</TableCell>
                <TableCell>{plan.PT_t1}</TableCell>
                <TableCell>{plan.PT_t2}</TableCell>
                <TableCell>{plan.PT_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Chiropractic Care</TableCell>
                <TableCell>{plan.CHIRO_t1}</TableCell>
                <TableCell>{plan.CHIRO_t2}</TableCell>
                <TableCell>{plan.CHIRO_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Lab</TableCell>
                <TableCell>{plan.LAB_t1}</TableCell>
                <TableCell>{plan.LAB_t2}</TableCell>
                <TableCell>{plan.LAB_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>X-Ray</TableCell>
                <TableCell>{plan.XRAY_t1}</TableCell>
                <TableCell>{plan.XRAY_t2}</TableCell>
                <TableCell>{plan.XRAY_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Ambulance</TableCell>
                <TableCell>{plan.AMBULANCE_t1}</TableCell>
                <TableCell>{plan.AMBULANCE_t2}</TableCell>
                <TableCell>{plan.AMBULANCE_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Emergency Care <br /> Emergency care's available worldwide.
                </TableCell>
                <TableCell>{plan.EMERGENCY_t1}</TableCell>
                <TableCell>{plan.EMERGENCY_t2}</TableCell>
                <TableCell>{plan.EMERGENCY_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Urgent/Convenient Care</TableCell>
                <TableCell>{plan.URGENT_t1}</TableCell>
                <TableCell>{plan.URGENT_t2}</TableCell>
                <TableCell>{plan.URGENT_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Outpatient Hospital Care</TableCell>
                <TableCell>{plan.OUTHOSP_t1}</TableCell>
                <TableCell>{plan.OUTHOSP_t2}</TableCell>
                <TableCell>{plan.OUTHOSP_oon}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Inpatient Hospital Care <br /> (Including services received)
                </TableCell>
                <TableCell>
                  {plan.INHOSP_t1.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {plan.INHOSP_t2.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {plan.INHOSP_oon.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Skilled Nursing Facility <br /> Noncustodial care based on
                  medical necessity
                </TableCell>
                <TableCell>
                  {plan.SNF_t1.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {plan.SNF_t2.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {plan.SNF_oon.map(item => (
                    <div>
                      <nobr>{item}</nobr>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <h2>Drug and Pharmacy Benefits</h2>
          <div>
            <Button variant="outlined">Find a Pharmacy</Button>
            <Button variant="outlined">Check Drug Coverage</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
