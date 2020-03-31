import React from 'react'

const Title = ({titleText}) => {
    return (
        <button type="button" class="btn btn-outline-warning text-center btn-lg btn-block mb-5 disabled">{titleText}</button>
    )
}

export default Title;
