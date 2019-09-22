import React from 'react';
import classes from './Image.module.css';

export default (props) => {

    let cls = [classes.Image];

    if(!props.sizeFull){
        cls.push(classes.small);
    }
    console.log(props)

    return (
        <div className={classes.Wrapper}>
            <img src={props.url} alt={props.alt} className={cls.join(' ')}/>
        </div>
    );
}