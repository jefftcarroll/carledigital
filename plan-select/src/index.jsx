import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import PlanSelect from './plan-select'

ReactDOM.render(<PlanSelect />, document.getElementById('root'))
