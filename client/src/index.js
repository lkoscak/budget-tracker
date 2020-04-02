import React from 'react';
import ReactDOM from 'react-dom';

import {AuthProvider} from './context/auth/AuthContext';
import App from './components/App';

ReactDOM.render(<AuthProvider><App/></AuthProvider>, document.getElementById('root'));
