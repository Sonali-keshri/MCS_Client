import React from 'react'

const Button = ({ value , outline }) => {
    return (
        <button className={`${outline ? " border border-[#0076CE] text-[#0076CE]" : " bg-[#0076CE] text-white"} font-bold  px-6 py-2 rounded-lg`}>
            {value}
        </button>
    )
}

export default Button