import React from 'react';
import classes from './ListImage.module.css';
import Li from './Li/Li';


export default (props) => {
    console.log(props)
    return(
        <div className={classes.ListImage}>
            <ul className={classes.Up}>
                {props.imgs.map((img) => {
                    return (<Li 
                                key = {img.id} 
                                url = {img.urls.small} 
                                description = {img.description}
                                user = {img.user}
                                id = {img.id}
                                />);
                })}
            </ul>
        </div>
    );
}