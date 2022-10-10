import React from "react";
import './TodoItem.css'
export default function TodoItem({ text, completed, onComplete, onDelete }) {

    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}> √</span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <span className="Icon Icon-delete" onClick={onDelete}>X</span>
        </li>
    )
}

