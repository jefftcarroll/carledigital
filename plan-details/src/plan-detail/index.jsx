import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import queryString from 'query-string'

import ScrollableAnchor,  { configureAnchors }  from 'react-scrollable-anchor'

import {
  Tab,
  Tabs,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Grid,
  Icon,
  Paper,
  Button,
  Box,
  Card,
  CardHeader,
  CardContent,

} from '@material-ui/core'

import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import './styles.css'
import Theme from '../theme'

import fetch from 'isomorphic-fetch'
require('es6-promises')

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  topButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    boxSizing: 'border-box',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    padding: 0,
    boxSizing: 'border-box',
  },
  tableRow: {
    width: '100%',
    overflowX: 'auto',
    boxSizing: 'border-box',
  },
  tableCell: {
    padding: 0,
  },
  specialNote: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  cardHeader: {
    backgroundColor: '#422983',
    padding: theme.spacing(3),
    color: '#ffffff',
  },
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: 'none',
    border: '1px solid #e3e3e3',
  },
  note: {
    fontFamily: 'museo_sans100',
  },
  accordionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  fixed: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: '96px',
    zIndex: 1,
    width: '100%',
  },
  leftIcon: {
      marginRight: theme.spacing(1),
    },
  rightIcon: {
      marginLeft: theme.spacing(1),
    },
  iconSmall: {
        fontSize: 16,
      },

}))

function Shop({ plan }) {
  function drxlink(link) {
    const params = queryString.parse(window.location.search)
    return `${link}&zip=${params.zip}&fips=${params.fips}`
  }
  return (
      <>
        <h3>How to Enroll</h3>
        {plan.SITE === 'medicare' ?
          <p>
            These plans are effective Jan 1, 2020 - Dec 31, 2020.
            2020 Annual Enrollment starts Oct 15th.
          </p>
          :
          <p>
            Plans are effective Jan 1, 2020 - Dec 31, 2020.
            2020 Annual Enrollment starts Oct 15th. To enroll now you must qualify
            for a <a href="https://help.simplete.org/help/special-enrollment-periods">Special Enrollment Period</a>.<br/>
          </p>
        }
        <div>
          <Button class="btn"
          onClick={() => (document.location.href = drxlink(plan.DRXLINK))}
          >
            Enroll Online Now
          </Button>
        </div>
        <p>
          Or enroll <a href="/enroll">by phone, mail, or in person</a>.
        </p>
        {plan.SITE === 'medicare' ?
          <p>
            To enroll now you must qualify for a <a href="/when-to-enroll#SEP">Special Enrollment Period</a> 
            and enroll in the <a href={'/2019/plan-details?plan=' + plan.ID}>2019 Plan</a>.
          </p>
          :
          ""
        }
      </>
  )
}

function View({}) {
  return (
    <>
      <h3>Take charge of your health</h3>
      <ul class="checkmarks">
        <li>
          <a href="https://www.healthalliance.org/Account/Login">Log in</a> to your member account for plan.
          details
        </li>
        <li>
          Download the <a href="https://www.simplete.org/app">app</a>.
        </li>
        <li>
          Schedule virtual care with a doctor at 1-888-912-0904 or through the <a href="https://www.healthalliance.org/Account/Login">member account</a> or <a href="https://www.simplete.org/app">app</a>.
        </li>
        <li>
          <a href="https://help.simplete.org/help/how-to-get-paid-back-with-be-fit">Get paid back</a> up to $360 a year at the fitness center of your choice.
        </li>
        <li>
          Set healthy goals and earn rewards with <a href="https://www.healthalliance.org/rally">Rally&reg;</a>.
        </li>
        <li>
          <a href="https://help.simplete.org/help/wellness-rewards">Earn a $50 gift card</a> by completing certain wellness activities.
        </li>
        <li>
          Learn how <a href="https://www.healthalliance.org/care-coordination">care coordination</a> can help you.
        </li>
        <li>
          Get prompt medical attention through <a href="https://www.healthalliance.org/assist-america">Assist America</a> when you travel.
        </li>
        <li>
          Save on certain <a href="https://help.simplete.org/help/truhearing-select">TruHearing&reg;</a> hearing aids.
        </li>
      </ul>
    </>
  )
}

export default function PlanDetail() {



  const classes = useStyles()
  const tabs = ['Overview', 'Medical', 'Pharmacy']
  const [plan, setPlan] = useState(null)
  const [selectedTabIndex, setSelectedTabIndex] = useState(-1)

  function getShopView() {
    const q = queryString.parse(window.location.search)
    return q.page || ""
  }

  useEffect(() => {
    configureAnchors({offset: -192, scrollDuration: 200})

    fetch(`//${window.location.host}/2020/plans.json`, {})
      .then(resp => resp.json())
      .then(json => {
        const q = queryString.parse(window.location.search)
        const _plan = json.find(plan => q.plan === plan.ID)
        setPlan(_plan)
      })
  }, [])

  return plan && plan.NAME ? (
    <Theme>
      <div className={`${classes.root} wrapper`}>
        {plan.SITE === 'medicare' ?
          ''
          :
            <ScrollableAnchor id="section_top">
              <div className={`${classes.fixed} detailtabs`}>
                <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  value={selectedTabIndex}
                  onChange={(e, index) => setSelectedTabIndex(index)}
                >
                  {tabs.map((label, i) => (
                    <a href={`#section_${i}`}>
                      <Tab label={label} />
                    </a>
                  ))}
                </Tabs>
              </div>
            </ScrollableAnchor>
          }
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <ScrollableAnchor id="section_0">
              <h1>{plan.NAME}</h1>
            </ScrollableAnchor>

            <Table className={classes.table}>
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell>Monthly Premium</TableCell>
                  <TableCell>{plan.PREMIUM}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Medical Deductible</TableCell>
                  <TableCell>{plan.MEDDEDUCTIBLE}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Prescription Drug Deductible</TableCell>
                  <TableCell>{plan.RXDEDUCTIBLE}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Yearly Out-of-Pocket Max</TableCell>
                  <TableCell>
                    <p>{plan.LIMIT_t1}</p>
                    {/*<p>Tier 2: {plan.LIMIT_t2 || 'NA'}</p>*/}
                    {/*<p>Out of Network: {plan.LIMIT_oon || 'NA'}</p>*/}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Box mt={2}>
              <Button
                class="btn btn-hollow btn-plum"
                onClick={() => (window.location.href = plan.EOC)}
              >
                <DescriptionOutlinedIcon fontSize="small"/>
                {plan.PLANTYPE === 'C' ? "Plan Highlights" :"Evidence of Coverage"}
              </Button>

              {plan.PLANTYPE === 'C' ? "" :
                <Button
                  class="btn btn-hollow btn-plum"
                  onClick={() => (window.location.href = plan.ANOC)}
                >
                  <DescriptionOutlinedIcon fontSize="small"/>
                  Annual Notice of Change
                </Button>
              }

              <Button
                class="btn btn-hollow btn-plum"
                onClick={() => (window.location.href = plan.SOB)}
              >
                <DescriptionOutlinedIcon fontSize="small"/>
                Summary of Benefits
              </Button>
            </Box>

          </Grid>

          <Grid item xs={12} sm={12} md={4}>

            {plan.PLANTYPE === 'C' ? "" :
              <>
              <Paper className={classes.specialNote}>
                {getShopView().toLowerCase() === 'view' ? <View /> : <Shop plan={plan} />}
              </Paper>
              {plan.SITE === 'medicare' ?
                <Paper className={classes.specialNote}><p>See all <a href="/perks">Perks and Protections</a>.</p></Paper>
                :
                ""
              }
              </>
            }

          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <ScrollableAnchor id="section_1">
              <h2 class="spacing-top">Medical Benefits</h2>
            </ScrollableAnchor>
            <p>
              This is an overview of what you pay for commonly used benefits $ =
              copay. % = coinsurance
            </p>
          </Grid>

          <Grid item xs={12} sm={12} md={8}>
            <Table className={`${classes.table} medical-benefits`}>
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell></TableCell>
                  {plan.TYPE === 'HPNC' ?
                    <TableCell>Tier 1</TableCell>
                    :
                    <TableCell></TableCell>
                  }
                  <TableCell>{plan.TYPE === 'HPNC' ? "Tier 2":"In Network"}</TableCell>
                  <TableCell>Out of Network</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell>Primary Care Physician Office Visit</TableCell>
                  <TableCell>{plan.PCP_t1 || ''}</TableCell>
                  <TableCell>{plan.PCP_t2 || 'N/A'}</TableCell>
                  <TableCell>{plan.PCP_oon || 'N/A'}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Specialist Office Visit</TableCell>
                  <TableCell>
                    {plan.SPECIALIST_t1 || ''}
                  </TableCell>
                  <TableCell>
                    {plan.SPECIALIST_t2 || 'N/A'}
                  </TableCell>
                  <TableCell>
                    {plan.SPECIALIST_oon || 'N/A'}
                  </TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Physical Therapy</TableCell>
                  <TableCell>{plan.PT_t1 || ''}</TableCell>
                  <TableCell>{plan.PT_t2 || 'N/A'}</TableCell>
                  <TableCell>{plan.PT_oon || 'N/A'}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Chiropractic Care</TableCell>
                  <TableCell>{plan.CHIRO_t1 || ''}</TableCell>
                  <TableCell>{plan.CHIRO_t2 || 'N/A'}</TableCell>
                  <TableCell>{plan.CHIRO_oon || 'N/A'}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Lab</TableCell>
                  <TableCell>{plan.LAB_t1 || ''}</TableCell>
                  <TableCell>{plan.LAB_t2 || 'N/A'}</TableCell>
                  <TableCell>{plan.LAB_oon || 'N/A'}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>X-Ray</TableCell>
                  <TableCell>{plan.XRAY_t1 || ''}</TableCell>
                  <TableCell>{plan.XRAY_t2 || 'N/A'}</TableCell>
                  <TableCell>{plan.XRAY_oon || 'N/A'}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Ambulance</TableCell>
                  <TableCell>{plan.AMBULANCE_t1 || ''}</TableCell>
                  <TableCell>{plan.AMBULANCE_t2 || 'N/A'}</TableCell>
                  <TableCell>
                    {plan.AMBULANCE_oon || 'N/A'}
                  </TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>
                    Emergency Care <br /> Emergency care's available worldwide.
                  </TableCell>
                  <TableCell>{plan.EMERGENCY_t1 || ''}</TableCell>
                  <TableCell>{plan.EMERGENCY_t2 || 'N/A'}</TableCell>
                  <TableCell>
                    {plan.EMERGENCY_oon || 'N/A'}
                  </TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Urgent/Convenient Care</TableCell>
                  <TableCell>{plan.URGENT_t1 || ''}</TableCell>
                  <TableCell>{plan.URGENT_t2 || 'N/A'}</TableCell>
                  <TableCell>{plan.URGENT_oon || 'N/A'}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Outpatient Hospital Care</TableCell>
                  <TableCell>{plan.OUTHOSP_t1 || ''}</TableCell>
                  <TableCell>{plan.OUTHOSP_t2 || 'N/A'}</TableCell>
                  <TableCell>{plan.OUTHOSP_oon || 'N/A'}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
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
                    {plan.INHOSP_t2.length > 0
                      ? plan.INHOSP_t2.map(item => (
                      <div>
                        <nobr>{item}</nobr>
                      </div>
                    )) : "N/A"}
                  </TableCell>
                  <TableCell>
                    {plan.INHOSP_oon.length > 0
                      ? plan.INHOSP_oon.map(item => (
                      <div>
                        <nobr>{item}</nobr>
                      </div>
                    )) : "N/A"}
                  </TableCell>
                </TableRow>

                {plan.PLANTYPE === 'C' ? "" :
                  <TableRow className={classes.tableRow}>
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
                      {plan.SNF_t2.length > 0
                        ? plan.SNF_t2.map(item => (
                        <div>
                          <nobr>{item}</nobr>
                        </div>
                      )) : "N/A"}
                    </TableCell>
                    <TableCell>
                      {plan.SNF_oon.length > 0
                        ? plan.SNF_oon.map(item => (
                        <div>
                          <nobr>{item}</nobr>
                        </div>
                      )) : "N/A"}
                    </TableCell>
                  </TableRow>
                }

              </TableBody>
            </Table>
          </Grid>


          <Grid item xs={12} sm={12} md={8}>
            <ScrollableAnchor id="section_2">
              <h2 class="spacing-top">Drug and Pharmacy Benefits </h2>
            </ScrollableAnchor>

            {plan.RX === 'TRUE' ?
            <>
            <div>
              <Box mt={2} mb={2}>

                {plan.PLANTYPE === 'C' ?
                <Button
                  class="btn btn-hollow btn-plum"
                  onClick={() =>
                    (window.location.href = 'https://healthalliance.org/find-a-pharmacy')
                  }
                >
                  Find a Pharmacy
                </Button>
                :
                  <Button
                    class="btn btn-hollow btn-plum"
                    onClick={() =>
                      (window.location.href = 'https://medicare.healthalliance.org/find-a-pharmacy')
                    }
                  >
                    Find a Pharmacy
                  </Button>
                }


                {plan.PLANTYPE === 'C' ? "" :
                  <Button
                    class="btn btn-hollow btn-plum"
                    onClick={() =>
                      (window.location.href = 'https://HAMP.destinationrx.com/compare/MDC/2020')
                    }
                  >
                    Estimate Drug Cost
                  </Button>
                }

              </Box>
            </div>

            {plan.PLANTYPE === 'C' ? "" :
              <Card className={classes.card}>
                <CardHeader
                  className={classes.cardHeader}
                  title="$0 Tier 1 Generics"
                />
                <CardContent>
                  You can get Tier 1 generic drugs for $0 when you fill your
                  prescription at Walgreens or other preferred pharmacies. You can
                  also get drugs at other standard network pharmacies for a low
                  cost.
                </CardContent>
              </Card>
            }

            {plan.PLANTYPE === 'C' ? "" :
              <Card className={classes.card}>
                <CardHeader className={classes.cardHeader} title="Retail 90" />
                <CardContent>
                  Fill a 90-day supply of your Tier 1 medications at $0 and Tier 2
                  and 3 medications for a 2-month copay at Walgreens or other
                  preferred cost-sharing pharmacies or through the mail. A 90-day supply of your Tier
                  1 through 3 medications is available for a 2.5-month copay at
                  our other standard cost-sharing pharmacies. This applies in
                  store or by mail order.
                </CardContent>
              </Card>
            }


            <div className={classes.note}>
              Prices listed are for 30-day retail. If there is a lower-priced
              deal at the pharmacy than what you’d pay through us, you will get
              the drugs for that lower price.
            </div>
            </>
            :
            <p>
              This plan does not includes prescription drug coverage.
            </p>
            }
          </Grid>

          {plan.RX === 'TRUE' ?
          <>
          <Grid item xs={12} sm={12} md={8}>
            <Table className={classes.table}>
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell>Prescription Drugs Deductible</TableCell>
                  <TableCell>{plan.RXDEDUCTIBLE}</TableCell>
                </TableRow>

                {plan.PLANTYPE === 'C' ? "" :
                  <TableRow className={classes.tableRow}>
                    <TableCell>
                      Tier 1 Preferred Generic at Preferred Pharmacy
                    </TableCell>
                    <TableCell>{plan.RXPRE_t1}</TableCell>
                  </TableRow>
                }

                <TableRow className={classes.tableRow}>
                  <TableCell>Tier 1 Preferred Generic</TableCell>
                  <TableCell>{plan.RX_t1}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Tier 2 Generic</TableCell>
                  <TableCell>{plan.RX_t2}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Tier 3 Brand</TableCell>
                  <TableCell>{plan.RX_t3}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Tier 4 Non-Preferred</TableCell>
                  <TableCell>{plan.RX_t4}</TableCell>
                </TableRow>

                <TableRow className={classes.tableRow}>
                  <TableCell>Tier 5 Specialty</TableCell>
                  <TableCell>{plan.RX_t5}</TableCell>
                </TableRow>

                {plan.PLANTYPE === 'M' ? "" :
                  <TableRow className={classes.tableRow}>
                    <TableCell>
                      Non-Preferred Specialty
                    </TableCell>
                    <TableCell>{plan.RX_t6}</TableCell>
                  </TableRow>
                }

                {plan.PLANTYPE === 'M' ? "" :
                  <TableRow className={classes.tableRow}>
                    <TableCell>
                      Medical Drugs
                    </TableCell>
                    <TableCell>{plan.RX_t7}</TableCell>
                  </TableRow>
                }



              </TableBody>
            </Table>
          </Grid>

          <Grid item xs={12} sm={12} md={8}>
            <Box mt={2} mb={3}>
              <Button
                class="btn btn-hollow btn-plum"
                onClick={() => (window.location.href = plan.FORMULARY)}
              >
                <DescriptionOutlinedIcon fontSize="small"/>
                Drug Formulary
              </Button>

              <Button
                class="btn btn-hollow btn-plum"
                onClick={() => (window.location.href = plan.RXDIRECTORY)}
              >
                <DescriptionOutlinedIcon fontSize="small"/>
                Pharmacy Directory
              </Button>
            </Box>
          </Grid>
          </>
          :
          ""
        }
        </Grid>
      </div>
    </Theme>
  ) : null
}
