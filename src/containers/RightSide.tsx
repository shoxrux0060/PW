import React from "react";
import {createUseStyles} from "react-jss";
import {CREATE_PAYMENT, TRANSACTIONS} from "../Main";
import {CreatePayment} from "../menu/CreatePayment";
import AK from "./../assest/img/АК.png"
import lang from "./../assest/img/lang.png"
import Vector from "./../assest/img/Vector.png"
import {Transactions} from "../menu/Transactions";
import {Employees} from "../menu/Employees";

const useStyles = createUseStyles({
    wrapper: {
        width: '100%',
        // width: 'calc(100% - 432px)',
        padding: 42,
        backgroundColor: '#f6f6f6'
    },
    header: {
        height: 120,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ccc',
        width: '100%',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    card: {
        borderRadius: 6,
        backgroundColor: 'white',
        width: 214,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    card2: {
        marginRight:'2rem'
    },
    currency: {
        fontSize: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '25%',
    },
    currencyWrapper: {
        borderRadius: '50%',
        backgroundColor: '#f6f6f6',
        color: 'gray',
        width: 30,
        height: 30,
    },
    sum: {
        fontWeight: 'bold'
    },
    sumDesc: {
        color: 'gray',
        fontSize: 14
    },
    sumWrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    detailsWrapper: {
        display: 'flex',
        gap: '1rem'
    },
    badge: {
        borderRadius: 6,
        backgroundColor: 'white',
        width: 56,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bodyWrapper: {
        backgroundColor: 'white',
        margin: '42px 0',
        borderRadius: 6,
        padding: '4rem 2rem',
    },
});

interface IRightSide {
    activeMenu: string;
    title: string | undefined ;
}

export const RightSide: React.FC<IRightSide> = ({activeMenu,title}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span className={classes.title}>{title}</span>
                <div className={classes.detailsWrapper}>
                    <div className={classes.card}>
                        <div className={classes.currencyWrapper}>
                            <span className={classes.currency}>UZS</span>
                        </div>
                        <div className={classes.sumWrapper}>
                        <span className={classes.sum}>
                            10 000 000 000,00
                        </span>
                            <span className={classes.sumDesc}>
                        Средств на UZS счетах
                        </span>
                        </div>
                    </div>
                    <div className={`${classes.card} ${classes.card2}`}>
                        <div className={classes.currencyWrapper}>
                            <span className={classes.currency}>UZS</span>
                        </div>
                        <div className={classes.sumWrapper}>
                        <span className={classes.sum}>
                            20 000 000 000,00
                        </span>
                            <span className={classes.sumDesc}>
                        Средств на UZS счетах
                        </span>
                        </div>
                    </div>
                    <div className={classes.badge}>
                        <img src={Vector} alt=""/>
                    </div>
                    <div className={classes.badge}>
                        <img src={lang} alt=""/>
                    </div>
                    <div className={classes.badge}>
                        <img src={AK} alt=""/>
                    </div>

                </div>

            </div>
            <div className={classes.bodyWrapper}>
                {activeMenu===CREATE_PAYMENT? <CreatePayment/> : activeMenu===TRANSACTIONS? <Transactions/> : <Employees/>}
            </div>
        </div>
    )
}