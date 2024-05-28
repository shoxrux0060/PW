import React, {useState} from "react";
import {useStyles} from "./MainStyles";
import icon1 from "./assest/img/icon1.png"
import icon2 from "./assest/img/icon2.png"
import icon3 from "./assest/img/icon3.png"
import {LeftSide} from "./containers/LeftSide";
import {RightSide} from "./containers/RightSide";

export const CREATE_PAYMENT = 'CREATE_PAYMENT'
export const TRANSACTIONS = 'TRANSACTIONS'
export const EMPLOYEES = 'EMPLOYEES'

export interface IMenuList{
    label: string;
    value: string;
    icon: string;
}
const menuList:IMenuList[] = [
    {
        label: 'Создать платеж',
        value: CREATE_PAYMENT,
        icon: icon1
    },
    {
        label: 'Транзакции',
        value: TRANSACTIONS,
        icon: icon2
    },
    {
        label: 'Мои сотрудники',
        value: EMPLOYEES,
        icon: icon3
    },
]

export const Main: React.FC = () => {
    const classes = useStyles()
    const [activeMenu, setActiveMenu] = useState(CREATE_PAYMENT)

    return (
        <div className={classes.container}>
            <LeftSide menuList={menuList} activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
            <RightSide activeMenu={activeMenu} title={menuList.find(v=>v.value===activeMenu)?.label} />
        </div>
    )
}