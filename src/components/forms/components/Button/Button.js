import React from 'react';

export default function Button (props) {
    const buttonType = () => {
        const buttonType = ["Primary", "Secondary", "Warning", "Success"];
        return `Button__${props.type}`;
    }

    return (
        <button className = {buttonType()}> {props.children} </button>
    )
}