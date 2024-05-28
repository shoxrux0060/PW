import React from "react";
import {createUseStyles} from "react-jss";
import logo from "../assest/img/logo.png";
import bg_left from "../assest/img/bg_left.jpg";
import {IMenuList} from "../Main";
import {Currency} from "../components/Currency";

const useStyles = createUseStyles({
    logo: {
        width: 175,
        height: 65,
        objectFit: 'contain',
        marginBottom: '2rem'
    },
    leftSide: {
        height: '100vh',
        width: '400px',
        backgroundImage: `url(${bg_left})`,
    },
    wrapper: {
        padding: '84px 42px 84px 84px',
        height: '82%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    company: {
        fontSize: 16
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '2rem',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white'

    },
    button: {
        display: 'flex',
        fontSize: 18,
        gap: '.5rem',
        height: 64,
        cursor: 'pointer',
        transition: "all 300ms ease",
        borderRadius: 6,
        alignItems: 'center',
        "&:hover": {
            background: "rgba(255, 255, 255, 0.3)",
            paddingLeft: '1rem'
        },
    },
    activeButton: {
        background: "rgba(255, 255, 255, 0.2)",
        paddingLeft: '1rem'
    },
    icon: {
        width: 18,
        height: 18,

    },
    currencyWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        gap:'1rem'
    },
    currency: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

interface ILeftSide {
    menuList: IMenuList[];
    activeMenu: string;
    setActiveMenu: (value: string) => void
}

export interface IResponse {
    id: number;
    Code: string;
    Ccy: string;
    CcyNm_RU: string;
    CcyNm_UZ: string;
    CcyNm_UZC: string;
    CcyNm_EN: string;
    Nominal: string;
    Rate: string;
    Diff: string;
    Date: string;
}

const currencies = [
    'USD',
    'EUR',
    'RUB',
]


export const LeftSide: React.FC<ILeftSide> = ({menuList, activeMenu, setActiveMenu}) => {
    const classes = useStyles();
    return (
        <div className={classes.leftSide}>
            <div className={classes.wrapper}>
                <div className={classes.info}>
                    <img className={classes.logo} src={logo} alt="logo"/>
                    <span className={classes.company}>Компания</span>
                    <span className={classes.companyName}>ООО “FUTURE OPEN TECHNOLOGY GROUP”</span>
                    {menuList.map((v, i) => (
                        <div
                            className={`${classes.button} ${activeMenu === v.value && classes.activeButton}`}
                            onClick={() => setActiveMenu(v.value)}
                        >
                            <img className={classes.icon} src={v.icon} alt={v.label}/>
                            <span>{v.label}</span>
                        </div>
                    ))}
                </div>
                <div className={classes.currencyWrapper}>
                    {currencies.map(v => (
                        <Currency curType={v}/>
                    ))}
                </div>
            </div>
        </div>
    )
}