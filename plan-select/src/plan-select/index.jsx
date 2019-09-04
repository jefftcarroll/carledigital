import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import queryString from 'query-string'

import './styles.css'

import Theme from '../theme'

import Names from './sections/names'
import SubNames from './sections/sub-names'
import Descriptions from './sections/descriptions'
import ViewDetailsButtons from './sections/view-details-buttons'
import Heading from './sections/heading'

import FindAProvider from './sections/find-a-provider'
import MedicalDeductibles from './sections/medical-deductibles'
import PrescriptionDrugDeductibles from './sections/prescription-drug-deductibles'

import BenefitTiers1 from './sections/benefit-tiers-1'
import BenefitTiers2 from './sections/benefit-tiers-2'
import BenefitChecks from './sections/benefit-checks'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import fetch from 'isomorphic-fetch'
require('es6-promises')

// https://www.figma.com/proto/J9Gdebpcb3grmnjchfc3Rm9F/Simplete-Website?node-id=340%3A5325&viewport=857%2C397%2C0.16888083517551422&scaling=min-zoom

const useStyles = makeStyles(theme => ({
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
  table: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  fixed: {
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  tsectionhead: {
    border: '0px',
    paddingTop: '24px',
    paddingBottom: '24px',
  },
}))

export default function PlanSelect() {
  const classes = useStyles()

  const [selectedPlans, setSelectedPlans] = useState([])

  useEffect(() => {
    fetch(`//${window.location.host}/2020/plans.json`, {})
      .then(resp => resp.json())
      .then(json => {
        setSelectedPlans(filterPlans(json))
      })
  }, [])

  function filterPlans(plans) {
    if (plans.length === 0) return []
    const keys = ['plan1', 'plan2', 'plan3']
    const selections = queryString.parse(window.location.search)

    return plans.filter(plan =>
      keys.map(key => selections[key]).includes(plan.ID)
    )
  }

  return (
    <Theme>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {selectedPlans.map(plan => (
              <TableCell key={plan.ID} className={classes.fixed}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.topButton}
                  onClick={() => (document.location.href = plan.DRXLINK)}
                >
                  Choose {plan.NAME}
                </Button>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <Names plans={selectedPlans} classes={classes} />
          <SubNames plans={selectedPlans} classes={classes} />
          <Descriptions plans={selectedPlans} classes={classes} />
          <ViewDetailsButtons plans={selectedPlans} classes={classes} />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Provider Network'}
          />
          <FindAProvider plans={selectedPlans} classes={classes} />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Medical Deductible'}
          />
          <MedicalDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="MEDDEDUCTIBLE"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Prescription Drugs Deductible'}
          />
          <PrescriptionDrugDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="RXDEDUCTIBLE"
            showDeductibleLabel
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Yearly Limit'}
          />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['LIMIT_t1', 'LIMIT_t2', 'LIMIT_oon']}
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Primary Care Physician Office Visit'}
          />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['PCP_t1', 'PCP_t2', 'PCP_oon']}
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Specialist Office Visit'}
          />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['SPECIALIST_t1', 'SPECIALIST_t2', 'SPECIALIST_oon']}
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Virtual Visits'}
          />
          <BenefitChecks plans={selectedPlans} classes={classes} attr="VV" />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Be Fit Fitness Program'}
          />
          <BenefitChecks plans={selectedPlans} classes={classes} attr="BEFIT" />

          <Heading plans={selectedPlans} classes={classes} text={'Rally'} />
          <BenefitChecks plans={selectedPlans} classes={classes} attr="RALLY" />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Assist America'}
          />
          <BenefitChecks
            plans={selectedPlans}
            classes={classes}
            attr="ASSIST"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Anytime Nurse'}
          />
          <BenefitChecks
            plans={selectedPlans}
            classes={classes}
            attr="ANURSE"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'$200 or more for Dental'}
          />
          <BenefitChecks
            plans={selectedPlans}
            classes={classes}
            attr="MOREDENTAL"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'TruHearing Select Hearing Aids'}
          />
          <BenefitChecks
            plans={selectedPlans}
            classes={classes}
            attr="TRUHEAR"
          />

          <TableRow>
            <TableCell
              className={classes.tsectionhead}
              colSpan={selectedPlans.length}
            >
              <h2>Covered Medical and Hospital Benefits</h2>
            </TableCell>
          </TableRow>

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Physical Therapy'}
          />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['PT_t1', 'PT_t2', 'PT_oon']}
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Chiropractic Care'}
          />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['CHIRO_t1', 'CHIRO_t2', 'CHIRO_oon']}
          />

          <Heading plans={selectedPlans} classes={classes} text={'Lab'} />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['LAB_t1', 'LAB_t2', 'LAB_oon']}
          />

          <Heading plans={selectedPlans} classes={classes} text={'X-Ray'} />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['XRAY_t1', 'XRAY_t2', 'XRAY_oon']}
          />

          <Heading plans={selectedPlans} classes={classes} text={'Ambulance'} />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['AMBULANCE_t1', 'AMBULANCE_t2', 'AMBULANCE_oon']}
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Emergency Care'}
          />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['EMERGENCY_t1', 'EMERGENCY_t2', 'EMERGENCY_oon']}
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Urgent/Convenient Care'}
          />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['URGENT_t1', 'URGENT_t2', 'URGENT_oon']}
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Outpatient Hospital Care'}
          />
          <BenefitTiers1
            plans={selectedPlans}
            classes={classes}
            tiers={['OUTHOSP_t1', 'OUTHOSP_t2', 'OUTHOSP_oon']}
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Inpatient Hospital Care'}
          />
          <BenefitTiers2
            plans={selectedPlans}
            classes={classes}
            tiers={['INHOSP_t1', 'INHOSP_t2', 'INHOSP_oon']}
          />

          <TableRow>
            <TableCell
              className={classes.tsectionhead}
              colSpan={selectedPlans.length}
            >
              <h2>Prescription Drug Coverage</h2>
              <p>
                With Simplete, Part D (prescription coverage) is included
                automatically. There are no pharmacy deductibles and you can get
                Tier 1 generic drugs for $0 when you fill your prescription at
                Walgreens or other preferred cost-sharing pharmacies. You can
                also get drugs at other standard cost-sharing network pharmacies
                for a low cost.
              </p>
              <p>
                <strong>Prices listed are for 30-Day Retail.</strong>
              </p>
            </TableCell>
          </TableRow>

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Prescription Drugs Deductible'}
          />
          <PrescriptionDrugDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="RXDEDUCTIBLE"
            showDeductibleLabel
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Tier 1 Preferred Generic at Preferred Pharmacy'}
          />
          <PrescriptionDrugDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="RXPRE_t1"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Tier 1 Preferred Generic'}
          />
          <PrescriptionDrugDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="RX_t1"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Tier 2 Generic'}
          />
          <PrescriptionDrugDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="RX_t2"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Tier 3 Preferred Brand'}
          />
          <PrescriptionDrugDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="RX_t3"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Tier 4 Non-Preferred Brand'}
          />
          <PrescriptionDrugDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="RX_t4"
          />

          <Heading
            plans={selectedPlans}
            classes={classes}
            text={'Tier 5 Specialty Tier'}
          />
          <PrescriptionDrugDeductibles
            plans={selectedPlans}
            classes={classes}
            attr="RX_t5"
          />
        </TableBody>
      </Table>
    </Theme>
  )
}
