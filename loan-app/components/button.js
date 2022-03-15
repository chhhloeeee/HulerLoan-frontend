import React from 'react';

export const Button = ({text, onClick, className}) => {
    return <button onClick={onClick} className={className}>{text}</button>
}