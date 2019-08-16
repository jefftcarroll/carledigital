import React from 'react'

import { tierLabel } from '../../modules/string'

import PlanSection from './section'

export default function BenefitTier(props) {
  return (
    <PlanSection {...props}>
      {props.tiers
        .reduce((acc, key, i) => {
          if (props[key] && props[key].length > 0) {
            acc.push({
              limit: props[key],
              label: tierLabel(key, props[key], i),
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
    </PlanSection>
  )
}
