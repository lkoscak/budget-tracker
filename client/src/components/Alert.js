import React from 'react'

function Alert ({error}) {
    
    return (
        <div className="alert alert-danger">
            <strong>Login failed!  </strong>{error}
      </div>
    )
}

export default Alert;
