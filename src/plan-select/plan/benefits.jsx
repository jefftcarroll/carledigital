import React from 'react'

import BenefitTier from './tier'

export default function Plan(props) {
  return (
    <div>
      <BenefitTier
        title="Physical Therapy"
        {...props}
        tiers={['PT_t1', 'PT_t2', 'PT_oon']}
      />

      <BenefitTier
        title="Chiropractic care"
        {...props}
        tiers={['CHIRO_t1', 'CHIRO_t2', 'CHIRO_oon']}
      />

      <BenefitTier
        title="Lab"
        {...props}
        tiers={['LAB_t1', 'LAB_t2', 'LAB_oon']}
      />

      <BenefitTier
        title="X-Ray"
        {...props}
        tiers={['XRAY_t1', 'XRAY_t2', 'XRAY_oon']}
      />

      <BenefitTier
        title="Ambulance"
        {...props}
        tiers={['AMBULANCE_t1', 'AMBULANCE_t2', 'AMBULANCE_oon']}
      />
    </div>
  )
}
