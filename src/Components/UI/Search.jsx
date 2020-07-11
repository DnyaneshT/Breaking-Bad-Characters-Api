import React, { useState } from 'react'

function Search({getQuery}) {
    const [text, setText] = useState('')
    const handleChange=(q)=>{
        setText(q)
        getQuery(q)
    }
    return (
        <div className="search">
            <form>
                <input type="text" 
                value = {text}
                onChange={(e)=>handleChange(e.target.value)}
                placeholder="Search here" ></input>
            </form>
        </div>
    )
}

export default Search
