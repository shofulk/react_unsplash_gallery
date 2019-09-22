import React from 'react';
import classes from './BackButton.module.css';
import {NavLink} from 'react-router-dom'

export default () => {

    let cls = [classes.BackButton];
    cls.push("fas fa-arrow-left");

    return (
        <NavLink to='/'>
            <i className={cls.join(' ')}/>
        </NavLink>
    );
}