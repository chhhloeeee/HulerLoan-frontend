import React from 'react';

export const FormElement = ({text, required, type, name, className}) => {
    return (
            <label for={name}><span>{text} <span className="required">*</span></span><input type={type} className={className} name={name} required={required}/></label>
    )
}