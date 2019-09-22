import React from 'react';
import Image from '../../Image/Image';
import classes from './Li.module.css';
import {NavLink} from 'react-router-dom';

export default (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <li className={classes.Li} key={props.id}>
                <NavLink to={`/img/${props.id}`} className={classes.NavLink}>
                    <Image url = {props.url} sizeFull={false}/>
                    <div className = {classes.Description}>
                        <span>{props.description || "foto"}</span>
                        <span className={classes.UserName}>{props.user.name}</span>
                    </div>
                </NavLink>
            </li>
        </React.Fragment>
    );
}