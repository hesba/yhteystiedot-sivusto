import React from 'react'

function ErrorPage({ description, text }) {
    return (
        <div>
            <h1>{text}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default ErrorPage
