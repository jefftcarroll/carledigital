import React from 'react'
import CheckIcon from '../../icons/check'

import PlanSection from './section'

export default function BenefitCheck(props) {
  return (
    <PlanSection {...props}>
      {props.value && parseInt(props.value) === 1 ? (
        <CheckIcon color="primary" />
      ) : null}
      &nbsp;
    </PlanSection>
  )
}
