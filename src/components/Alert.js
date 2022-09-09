import React from 'react'

export default function Alert(props) {
    return (
        <div class={`alert alert-${props.theme} d-flex flex-row align-items-row`} role="alert">
            <i className={`bi ${props.icon} d-flex mx-2 my-1`}/>
            <div className="d-flex">{props.message}</div>
        </div>
    )
}
