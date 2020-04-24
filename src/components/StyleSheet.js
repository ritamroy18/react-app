import React from 'react'
import '../Mystyles.css';


function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h2 className={`${className}`}>StyleSheets</h2>
        </div>
    )
}

export default StyleSheet
