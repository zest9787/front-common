import React from 'react';
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: 'darkcyan',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 20,
        padding: '4px 6px',
        margin: 4,
        fontSize: 12
    }
})
const ActionButton = (props) => {
    const {label, ...others} = props;
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.root} {...others}>{label}</Button>
    );
};

export default ActionButton;
