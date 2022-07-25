// Dependencies
import React, { useState } from 'react'

export default function CustomToggle(props) {
    // set initial state
    const [toggle, handleToggle] = useState(false)
    return (
        <div
            onClick={() => handleToggle(!toggle)}
            className={`m-1 flex h-4 min-h-[1rem] w-8 min-w-[2rem] items-center rounded-full border-[1px] border-MatGrey p-[2px] ${
                toggle ? 'border-MatTeal' : 'border-MatGrey'
            }`}
        >
            <div
                className={`h-3 w-3 ${
                    toggle ? 'translate-x-full bg-MatTeal' : 'bg-MatGrey'
                } rounded-full transition duration-300`}
            ></div>
        </div>
    )
}
