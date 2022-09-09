import React from 'react'

export default function Alert(props) {
    return (
        <div className={`alert alert-${props.theme} ${props.display} flex-row align-items-row`} role="alert">
            <i className={`bi ${props.icon} d-flex mx-2 my-1`}/>
            <div className="d-flex">{props.message}</div>
        </div>
    )
}
