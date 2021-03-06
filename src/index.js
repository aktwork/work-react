import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import {ThemeProvider} from '@material-ui/core/styles'
// import * as theme from '@layout/config/theme'
import reportWebVitals from './reportWebVitals'

import * as Router from './route'

ReactDOM.render(
    // <ThemeProvider theme={theme.main}>
        <Suspense fallback={<>Loading</>}>
            <Router.Render />
        </Suspense>
    // </ThemeProvider>
    ,document.getElementById('root')
)
reportWebVitals()
