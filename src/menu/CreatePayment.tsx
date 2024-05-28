import React from "react";
import {createUseStyles} from "react-jss";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {MenuItem, Select, TextField} from "@mui/material";
import {styled} from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import {useUPostMMutation} from "../rtk/universalApi";


const useStyles = createUseStyles({
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    groupLabel: {
        fontWeight: 'bold',
    },
    formItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
    },
    label: {
        color: 'gray',
        width: '20rem'
    },
    input: {
        width: '435px',
    },
    button: {
        width: '232px',
        backgroundColor: '#4E0F8A',
        borderColor: '#4E0F8A',
        marginLeft: '32.7rem !important',
        marginTop: '2rem !important'
    },
    btnWrapper: {}
});

interface IFormInput {
    mfo: string
    lastName: string
    currency: string
    paymentQuite: string
    summ: string
    payType: string
}

const ColorButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.getContrastText('#4E0F8A'),
    backgroundColor: '#4E0F8A',
    '&:hover': {
        backgroundColor: '#4E0F8A',
    },
}));

export const CreatePayment: React.FC = () => {
    const classes = useStyles();
    const [createPayment, {
        isLoading: isLoadingCreate,
        // isSuccess: isSuccessCreate,
    }] = useUPostMMutation()
    const {control, handleSubmit} = useForm({
        defaultValues: {
            mfo: "",
            lastName: "",
            currency: 'UZS',
            paymentQuite: "",
            summ: "",
            payType: "",
        },
    })


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        createPayment(({url:'payment',data}))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.formWrapper}>
                <span className={classes.groupLabel}>Отправитель</span>
                <div className={classes.formItem}>
                    <span className={classes.label}>Валюта, счет</span>
                    <Controller
                        name="currency"
                        control={control}
                        render={({field}) => (
                            <Select
                                autoWidth
                                className={classes.input}
                                {...field}
                            >
                                <MenuItem value='UZS'>Узбекский сум</MenuItem>
                                <MenuItem value='RUB'>Российский рубль</MenuItem>
                                <MenuItem value='Currency'>Американский доллар</MenuItem>
                            </Select>
                        )}
                    />
                </div>
            </div>
            <div className={classes.formWrapper}>
                <span className={classes.groupLabel}>Получатель</span>
                <div className={classes.formItem}>
                    <span className={classes.label}>МФО банка</span>
                    <Controller
                        name="mfo"
                        control={control}
                        render={({field}) => (
                            <TextField
                                className={classes.input}
                                variant="outlined"
                                placeholder='0000 0000 0000 0000'
                                {...field}
                            />)}
                    />
                </div>
                <div className={classes.formItem}>
                    <span className={classes.label}>Расчетный счет</span>
                    <Controller
                        name="paymentQuite"
                        control={control}
                        render={({field}) => (
                            <TextField
                                className={classes.input}
                                variant="outlined"
                                placeholder='0000 0000 0000 0000'
                                {...field}
                            />)}
                    />
                </div>
            </div>
            <div className={classes.formWrapper}>
                <span className={classes.groupLabel}>Описание платежа</span>
                <div className={classes.formItem}>
                    <span className={classes.label}>Сумма</span>
                    <Controller
                        name="summ"
                        control={control}
                        render={({field}) => (
                            <TextField
                                className={classes.input}
                                variant="outlined"
                                placeholder='00.00 UZS'
                                {...field}
                            />)}
                    />
                </div>
                <div className={classes.formItem}>
                    <span className={classes.label}>Назначение платежа</span>
                    <Controller
                        name="payType"
                        control={control}
                        render={({field}) => (
                            <TextField
                                className={classes.input}
                                variant="outlined"
                                multiline
                                rows={3}
                                placeholder='Оплата таможенной пошлины'
                                {...field}
                            />)}
                    />
                </div>
            </div>


            <ColorButton
                disabled={isLoadingCreate}
                type='submit'
                variant="contained"
                className={classes.button}
            >
                Далее
            </ColorButton>
        </form>
    )
}