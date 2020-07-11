import React from 'react'
import spinnerlogo from '../../img/spinner.gif';

const Spinner = () => {
    return (
        <img src={spinnerlogo} alt='loading..'
        style={{width:'100px' , margin:'auto', display:"block"}}></img>
    )
}

export default Spinner
