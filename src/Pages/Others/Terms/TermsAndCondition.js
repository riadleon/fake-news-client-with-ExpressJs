import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is our terms</h3>
            <p>Go back to registration: <Link to='/register'>Register</Link>  </p>
        </div>
    );
};

export default TermsAndCondition;