import React from 'react'
import Button from '@material-ui/core/Button'

import PlanSection from './section'
import BenefitTier from './tier'
import BenefitCheck from './check'

export default function Plan(props) {
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

      <PlanSection
        title="Provider Network"
        column={props.column}
        classes={props.classes}
      >
        <h3>
          <a href="#">Find a Provider</a> in {props.NAME}
        </h3>
      </PlanSection>

      <PlanSection
        title="Medical Deductible"
        column={props.column}
        classes={props.classes}
      >
        {props.MEDDEDUCTIBLE} deductible
      </PlanSection>

      <PlanSection
        title="Prescription Drugs Deductible"
        column={props.column}
        classes={props.classes}
      >
        {props.RXDEDUCTIBLE} deductible
      </PlanSection>

      <BenefitTier
        title="Yearly Limit"
        {...props}
        tiers={['LIMIT_t1', 'LIMIT_t2', 'LIMIT_oon']}
      />

      <BenefitTier
        title="Primary Care Physician Office Visit"
        {...props}
        tiers={['PCP_t1', 'PCP_t2', 'PCP_oon']}
      />

      <BenefitTier
        title="Specialist Office Visit"
        {...props}
        tiers={['SPECIALIST_t1', 'SPECIALIST_t2', 'SPECIALIST_oon']}
      />

      <BenefitCheck title="Virtual Visits" value={props.VV} {...props} />

      <BenefitCheck
        title="Be Fit Fitness Program"
        value={props.BEFIT}
        {...props}
      />

      <BenefitCheck title="Rally" value={props.RALLY} {...props} />

      <BenefitCheck title="Assist America" value={props.ASSIST} {...props} />

      <BenefitCheck title="Anytime Nurse" value={props.ANURSE} {...props} />

      <BenefitCheck
        title="$200 or more for Dental"
        value={props.MOREDENTAL}
        {...props}
      />

      <BenefitCheck
        title="TruHearing Select Hearing Aids"
        value={props.TRUHEAR}
        {...props}
      />
    </div>
  )
}
