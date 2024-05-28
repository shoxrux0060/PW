import React from "react";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
});

export const DashLayout = ({children}) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
          {children}
        </div>
    )
}