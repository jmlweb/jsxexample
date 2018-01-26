import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import registerServiceWorker from './registerServiceWorker';
import { BreakpointsProvider } from 'react-breakpoints';
import { breakpoints } from './constants/breakpoints'

ReactDOM.render(
    <BreakpointsProvider breakpoints={breakpoints}>
        <App />
    </BreakpointsProvider>,
    document.getElementById('root'));
registerServiceWorker();
