import React from 'react'
import PropTypes from 'prop-types';

const Button = ({bgColor, text, onClick}) => {

    return (
        <button onClick={onClick} style={{backgroundColor:bgColor, width:170}} className='btn'>
               {text}
           </button>
    )
}

Button.defaultProps = {
    text:'Nėra teksto',
    bgColor:''
}
Button.propTypes = {
    bgColor: PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func.isRequired,
}
export default Button
