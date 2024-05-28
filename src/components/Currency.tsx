import React from 'react';
import top from "../assest/img/top.png";
import down from "../assest/img/down.png";
import {createUseStyles} from "react-jss";
import {useUGetQQuery} from "../rtk/universalApi";
import {CircularProgress} from "@mui/material";

const useStyles = createUseStyles({
    currency: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
    },
});

export const Currency: React.FC<{ curType: string }> = ({curType}) => {
    const classes = useStyles();
    const formattedDate = new Date().toISOString().split('T')[0];
    const {
        isLoading,
        data
    } = useUGetQQuery<any>({url: `/${curType}/${formattedDate}`})

    if (isLoading) {
        return <CircularProgress/>
    }
    return (
        <div>
            <div className={classes.currency}>
                <span>{curType}</span>
                <img src={Number(data?.[0].Diff)>0?top:down} alt=""/>
            </div>
            <span>{data?.[0]?.Rate}</span>
        </div>
    );
}